import {
  getAllClientSvc,
  getByIdClientSvc,
  createClientSvc,
  updateClientSvc,
  activateClientSvc,
  deactivateClientSvc,
  deleteClientSvc,
} from '../../services/clients.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';
import { navigate } from '@reach/router';

//TODO: setStatus e remove

export const getAllClientAct = () => {
  return async (dispatch) => {
    dispatch({type:TYPES.CLIENT_LOADING, status:true})
    try {
      const all = await getAllClientSvc()
      dispatch({
        type: TYPES.CLIENT_ALL,
        data: all.data.data
      })
    } catch (error){ 
      toastr.error("temos um error", error)
    }
  }
};

export const getByIdClientAct = (clientId) => {
  return async (dispatch) => {
    dispatch({type:TYPES.CLIENT_LOADING, status:true})
    try{
      const res = await getByIdClientSvc(clientId);
      dispatch({
        type: TYPES.CLIENT_BY_ID,
        data: res.data.data
      })
    } catch (error){
      toastr.error("temos um erro", error )
    }
  }
};

export const createClientAct = (data) => {
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
            type: TYPES.CLIENT_UPLOAD,
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
      const result = await createClientSvc(formData, config)
      dispatch({ type: TYPES.CLIENT_CREATE, data: result.data })
      toastr.success("Client", "Success! The new Client has been registered.")
    } catch (error) {
      toastr.error("Client", "Error! The new Client wasn't registered" )
      console.log(error)
    }
    console.log('disparar...', data)
  }
};

export const editClientAct = (clientId) => {
  return async (dispatch) => {
    dispatch({
      type: TYPES.CLIENT_UPLOAD,
      upload: 0,
    });
    try{
      const result = await getByIdClientSvc(clientId)
      dispatch({ type: TYPES.CLIENT_EDIT, data: result.data})
    } catch (error){
      toastr.error('temos um erro', error)
    }
  }
};

export const updatesClientAct = ({ clientId, ...data }) => {
  return(dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    dispatch({
      type:TYPES.CLIENT_UPLOAD,
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
          type: TYPES.CLIENT_UPLOAD,
          upload: percentCompleted
        })
      }
    };
    const formData = new FormData()
    Object.keys(data).map((k) => formData.append(k, data[k]))
    updateClientSvc(clientId, formData, config)
      .then((result) => {
        dispatch(editClientAct(clientId))
        dispatch(getAllClientAct())
        toastr.success('Client', 'Client atualizada com sucesso')
        dispatch({ type: TYPES.CLIENT_UPDATE })
      })
      .catch((error) => {
        dispatch({ type: TYPES.SIGN_ERROR, data: error })
        toastr.error('Client', error.toString())
      })
  }
}