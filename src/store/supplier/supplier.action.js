import { getAllSupplierSvc } from '../../services/suppliers.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';
import { navigate } from '@reach/router';

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
}