import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSupplierAct,
  createSupplierAct,
  editSupplierAct,
  updateSupplierAct,
  deleteSupplierAct,
  getByIdSupplierAct,
} from '../../../store/supplier/supplier.action';
import { Button } from '@material-ui/core';

import SupplierList from '../../../components/admin/suppliers/supplier.table'
import SupplierDetails from '../../../components/admin/suppliers/supplier.details'
import DialogModal from '../../../components/dialog';


function Suppliers () {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})

  const supplier = useSelector(state => state.suppliers.all?.data);
  const loading = useSelector(state => state.suppliers.loading);
  const selected = useSelector(state => state.suppliers.selected);
  const getById = useSelector(state => state.suppliers.getById);
  
  const callSupplier = useCallback(() => {
    dispatch(getAllSupplierAct())
  }, [dispatch]);
  
  useEffect(() => {
    callSupplier();
  }, []);

  const handleModalOpen = (type, id) => {
      dispatch(getByIdSupplierAct(id)) 
      setModal({type, id, status:true})
  }

  // const handleModalOpen = () => {
  //   setModal(true)
  // }
  const handleModalClose = () => {
    setModal(false)
  }
  
  return (
    <div>
      {JSON.stringify(getById)}
      <div>
        <SupplierList data={supplier} loading={loading} modal={handleModalOpen}/>
      </div>
      <div>
        {/* <Button onClick={handleModalOpen}>abrir</Button>
        <DialogModal open={modal} close={handleModalClose}> alguma coisa</DialogModal> */}
        <DialogModal open={modal.status || false} close={handleModalClose}>
          <div>
            {modal.type === 1 ? (<SupplierDetails data={getById}/>) : null}
          </div>
        </DialogModal>
      </div>
    </div>
  )
};

export default Suppliers;