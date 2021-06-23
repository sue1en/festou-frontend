import { removeToken, saveAuth } from '../../config/auth'
import { authService } from '../../services/auth.service';
import http from '../../config/http';
import TYPES from '../types';
import { navigate } from '@reach/router'

export const signInAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true})
    
    try {
      const result = await authService(data)
      if (result.data) {
        saveAuth(result.data?.data)
        http.defaults.headers.token = result.data.data.token     
      }
      console.log("###" + http.defaults.headers.token)
      dispatch({
        type: TYPES.SIGN_IN,
        data: result.data?.data
      })
      navigate('/admin')
    } catch (error) {
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
};

export const signOutAction = (data) => {
  return async (dispatch) => {
    removeToken();
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/signin')
  }
}