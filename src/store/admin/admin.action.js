import {
  getAllAdminSvc,
  getByIdAdminSvc
} from '../../services/admin.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';
import { navigate } from '@reach/router';

export const getAllAdminAct = () => {
  return async (dispatch) => {
    dispatch({type:TYPES.ADMIN_LOADING, status:true})
    try {
      const all = await getAllAdminSvc()
      dispatch({
        type: TYPES.SUPPLIER_ALL,
        data: all.data
      })
    } catch (error){
      toastr.error('temos um erro', error)
    }
  }
};

export const getByIdAdminAct = (adminId) => {
  return async (dispatch) => {
    try{
      const res = await getByIdAdminSvc(adminId);
      dispatch({
        type: TYPES.ADMIN_BY_ID,
        data: res.data.data
      })
    } catch (error){
      toastr.error('temos um erro', error)
    }
  }
};