import {
  getAllProductSvc,
  getByIdProductSvc,
  createProductSvc,
  updateProductSvc,
  deleteProductSvc
} from '../../services/products.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';

export const createProductAct = (data) => {
  return async (dispatch, getState) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: function (progressEvent) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        dispatch({
          type: TYPES.PRODUCT_UPLOAD,
          upload: {
            finish: percent === 100,
            percent: percent
          }
        })
      }
    }
    try {
      const formData = new FormData()
      Object.keys(data).map((k) => formData.append(k, data[k]))
      const supplierId = getState().auth.user.id
      const result = await createProductSvc(supplierId, formData, config)
      dispatch({ type: TYPES.PRODUCT_CREATE, data: result.data })
      toastr.success('Produto', 'Produto cadastrado com sucesso')
      dispatch(getAllProductAct())
    } catch (error) {
      toastr.error('Produto', 'deu ruim')
    }
  }
}
export const getAllProductAct = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
      const result = await getAllProductSvc()
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data })
    } catch (error) {
      toastr.error('aconteceu um erro', error)
    }
  }
}
export const deleteProductAct = (productId) => {
  return async (dispatch) => {
    try {
      const result = await deleteProductSvc(productId)
      dispatch({ type: TYPES.PRODUCT_EDIT, data: result.data })
      toastr.success('Categoria', 'Removido com sucesso')
      dispatch(getAllProductAct())
    } catch (error) {
      toastr.error('aconteceu um erro', error)
      toastr.error('Categoria', error.toString())
    }
  }
}


export const editProductAct = () => {

}

export const updateProductAct = () => {

}