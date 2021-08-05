import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllSupplierAct,
  getByIdSupplierAct,
  setStatusSupplierAct,
} from '../../../store/supplier/supplier.action';

import SupplierList from '../../../components/admin/suppliers/supplier.table'
import SupplierDetails from '../../../components/admin/suppliers/supplier.details'
import SupplierStatus from '../../../components/admin/suppliers/supplier.status'
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


  const toggleActive = () => {
    dispatch(setStatusSupplierAct(modal.id, !modal.supplierStatus)).then(handleModalClose)
  }

  const handleModalOpen = (type, id, supplierStatus) => {
      dispatch(getByIdSupplierAct(id)) 
      setModal({type, id, supplierStatus, status:true})
  }
  const handleModalClose = () => {
    setModal(false)
  }
  
  return (
    <div>
      <div>
        <SupplierList data={supplier} loading={loading} modal={handleModalOpen}/>
      </div>
      <div>
        <DialogModal
          open={modal.status || false}
          close={handleModalClose}
          title='Parceiro' 
        >
          <div>
            {modal.type === 1 ? (<SupplierDetails data={getById}/>) : null}
            {modal.type === 2 ? (<SupplierStatus close={handleModalClose} status={toggleActive}/>) : null}
          </div>
        </DialogModal>
      </div>
    </div>
  )
};

export default Suppliers;