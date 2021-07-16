import { removeToken, saveAuth } from '../../config/auth'
import { authService } from '../../services/auth.service';
import http from '../../config/http';
import TYPES from '../types';
import { navigate } from '@reach/router'
import { toastr } from 'react-redux-toastr'

export const signInAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true})
    
    try {
      const result = await authService(data)
      if (result.data) {
        saveAuth(result.data?.data)
        http.defaults.headers.token = result.data.data.token     
      }
      dispatch({
        type: TYPES.SIGN_IN,
        data: result.data?.data
      })
      toastr.success(`Autenticado com Sucesso!!`)
      navigate('/admin')
    } catch (error) {
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
      toastr.error("Ops!! Temos um erro", error.data['details'][0])
      navigate('/signin')
    }
  }
};

export const signOutAction = (data) => {
  return async (dispatch) => {
    removeToken();
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/')
  }
}