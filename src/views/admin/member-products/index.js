import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  CssBaseline,
  Button 
} from '@material-ui/core';
import {
  getAllProductAct,
  getByIdProductAct,
  createProductAct,
  editProductAct,
  updateProductAct,
  deleteProductAct,
  getSupplierProductsAct,
} from '../../../store/products/products.action';
import styled from 'styled-components'
//COMPONENTS
import ProductList from '../../../components/admin/products/product.table'
import Form from '../../../components/admin/products/product.form'
import Remove from '../../../components/admin/products/product.remove';
import ProductDetails from '../../../components/admin/products/product.details';
import DialogModal from '../../../components/dialog';

function MemberProducts () {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})

  const myProducts = useSelector(state => state.products.bySupplier);
  const loading = useSelector(state => state.products.loading);
  const selected = useSelector(state => state.products.selected);
  const userId = useSelector(state => state.auth.user?.id);
  const getById = useSelector(state => state.products.getById);



  const callProduct = useCallback(() => {
    dispatch(getSupplierProductsAct(userId))
    }, []);

  useEffect(() => {
    callProduct();
  }, []);

  const closeModal = () => setModal({ status: false })
  const openModal = (type = 1, id = null) => {
    if(id){
      dispatch(editProductAct(id)).then(() => 
        setModal({type, id, status:true})
      )
    } else {
      setModal({type, id, status: true})
    }
  }

  const submitForm = (form, id) => {
    switch (modal.type){
      case 1:
        dispatch(createProductAct(form))
        return
      case 2:
        dispatch(updateProductAct(form, userId))
        return
      case 3:
        dispatch(deleteProductAct(userId, modal.id)).then(() => setModal(false))
        return
      case 4:
        dispatch(getByIdProductAct(id))
        return
      default:
        return false
    }
  }
  
  return (
    <CategoryBody>
      <div>
        <div>
          <ProductList data={myProducts} loading={loading} modal={openModal}/>
        </div>
        <DialogModal
          open={modal.status || false}
          close={closeModal}
          title='produtos'  
        >
            {modal.type === 1 ? <Form close={closeModal} submit={submitForm}/> : null}
            {modal.type === 2 ? (<Form close={closeModal} submit={submitForm} data={selected}/>) : null}
            {modal.type === 3 ? (<Remove close={closeModal} remove={submitForm}/>) : null}
            {modal.type === 4 ? (<ProductDetails data={selected}/>) : null}
        </DialogModal>
      </div>
    </CategoryBody>
  )
};

export default MemberProducts;

const CategoryBody = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`