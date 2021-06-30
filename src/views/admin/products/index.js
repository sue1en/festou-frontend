import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  CssBaseline,
  Button 
} from '@material-ui/core';
import {
  getAllProductAct,
  createProductAct,
  editProductAct,
  updateProductAct,
  deleteProductAct,
} from '../../../store/products/products.action';
import styled from 'styled-components'
//COMPONENTS
import ProductList from '../../../components/admin/products/product.table'
import Form from '../../../components/admin/products/product.form'
import Remove from '../../../components/admin/products/product.remove';
import DialogModal from '../../../components/dialog';

function Products () {
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})

  const product = useSelector(state => state.products.all?.data);
  const loading = useSelector(state => state.products.loading);
  const selected = useSelector(state => state.products.selected);

  console.log(selected)

  const callProduct = useCallback(() => {
    dispatch(getAllProductAct())
    }, [dispatch]);

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

  const submitForm = (form) => {
    switch (modal.type){
      case 1:
        dispatch(createProductAct(form))
        return
      case 2:
        dispatch(updateProductAct(form))
        return
      case 3:
        dispatch(deleteProductAct(modal.id)).then(() => setModal(false))
        return
      default:
        return false
    }
  }
  
  return (
    <CategoryBody>
      <div>
        {/* <div>
          <CategoryListTeste data={category} loading={loading} modal={openModal}/>
        </div> */}
        <div>
          <ProductList data={product} loading={loading} modal={openModal}/>
        </div>
        <DialogModal
          open={modal.status || false}
          close={closeModal}
          title='Categorias'  
        >
            {modal.type === 1 ? <Form close={closeModal} submit={submitForm}/> : null}
            {modal.type === 2 ? (<Form close={closeModal} submit={submitForm} data={selected}/>) : null}
            {modal.type === 3 ? (<Remove close={closeModal} remove={submitForm}/>) : null}
        </DialogModal>
      </div>
    </CategoryBody>
  )
};

export default Products;

const CategoryBody = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`