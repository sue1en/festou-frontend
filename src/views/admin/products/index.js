import React, { useState, useEffect, useCallback } from 'react';
import { createProductAct, getAllProductAct } from '../../../store/products/products.action';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
//COMPONENTS
import AllProductsList from '../../../components/admin/products/product.list'
import Form from '../../../components/admin/products/product.form'

function Products () {
  const dispatch = useDispatch();
  // // const [modal, setModal] = React.useState({
  //   //   status: false
  //   // })

  const handleSubmit = (form) => dispatch(createProductAct(form))
  
  return (
    <ProductBody>
      <h1>Products</h1>
      <br/>
      <hr/>
      <br/>
      <AllProductsList/>
      <br/>
      <br/>
      {/* <Form submit={handleSubmit}/> */}
      <br/>
      <br/>
    </ProductBody>
  )
};

export default Products;

const ProductBody = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`