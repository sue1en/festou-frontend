import {
  getAllSupplierSvc,
  getByIdSupplierSvc,
  createSupplierSvc,
  updateSupplierSvc,
  activateSupplierSvc,
  deactivateSupplierSvc,
  deleteSupplierSvc,
} from '../../services/suppliers.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';
import { navigate } from '@reach/router';

//TODO: setStatus e remove

export const getAllSupplierAct = () => {
  return async (dispatch) => {
    dispatch({type:TYPES.SUPPLIER_LOADING, status:true})
    try {
      const all = await getAllSupplierSvc()
      dispatch({
        type: TYPES.SUPPLIER_ALL,
        data: all.data
      })
    } catch (error){ 
      toastr.error("temos um error", error)
    }
  }
};

export const getByIdSupplierAct = (supplierId) => {
  return async (dispatch) => {
    try{
      const res = await getByIdSupplierSvc(supplierId);
      dispatch({type: TYPES.SUPPLIER_BY_ID, data: res.data.data })
    } catch (error){
      toastr.error("temos um erro", error )
    }
  }
};

export const createSupplierAct = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type':'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
          )
          dispatch({
            type: TYPES.SUPPLIER_UPLOAD,
            upload: {
              finish: percent === 100,
              percent:percent
            }
          })
      }
    }
    try{
      const formData = new FormData()
      Object.keys(data).map((k) => formData.append(k, data[k]))
      const result = await createSupplierSvc(formData, config)
      dispatch({ type: TYPES.SUPPLIER_CREATE, data: result.data })
      toastr.success("Supplier", "Success! The new supplier has been registered.")
    } catch (error) {
      const resultfail = await createSupplierSvc()
      toastr.error("Error! The new supplier wasn't registered" )
      console.log(resultfail)
    }
    console.log('disparar...', data)
  }
};

export const editSupplierAct = (supplierId) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.SUPPLIER_UPLOAD,
      upload: 0,
    });
    try{
      const result = await getByIdSupplierSvc(supplierId)
      dispatch({ type: TYPES.SUPPLIER_EDIT, data: result.data})
    } catch (error){
      toastr.error('temos um erro', error)
    }
  }
};

export const updateSupplierAct = ({ supplierId, ...data }) => {
  return(dispatch) => {
    dispatch({ type: TYPES.SUPPLIER_LOADING, status: true })
    dispatch({
      type:TYPES.SUPPLIER_UPLOAD,
      upload: 0
    });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        console.log('percentCompleted', percentCompleted)
        dispatch({
          type: TYPES.SUPPLIER_UPLOAD,
          upload: percentCompleted
        })
      }
    };
    const formData = new FormData()
    Object.keys(data).map((k) => formData.append(k, data[k]))
    updateSupplierSvc(supplierId, formData, config)
      .then((result) => {
        dispatch(editSupplierAct(supplierId))
        dispatch(getAllSupplierAct())
        toastr.success('Supplier', 'Supplier atualizada com sucesso')
        dispatch({ type: TYPES.SUPPLIER_UPDATE })
      })
      .catch((error) => {
        dispatch({ type: TYPES.SIGN_ERROR, data: error })
        toastr.error('Supplier', error.toString())
      })
  }
}
export const setStatusSupplierAct = (supplierId, ativo) => {
  console.log('fornecedor mudar status', ativo)
  return async (dispatch, getState) => {
    let result
    try {
      if (ativo) {
        result = await deactivateSupplierSvc(supplierId)
        toastr.success(
          `Fornecedor ${result.data.data.tradeName}`,
          'Desativado com sucesso'
        )
      } else {
        result = await activateSupplierSvc(supplierId)
        toastr.success(
          `Fornecedor ${result.data.data.tradeName}`,
          'Ativado com sucesso'
        )
      }
      const all = getState().suppliers.all
      const index = all.data.findIndex((item) => item.id === supplierId)
      all.data[index].status = result.data.data.status

      dispatch({ type: TYPES.SUPPLIER_ALL, data: [...all] })
    } catch (err) {
      console.log('###', err)
    }
  }
}
