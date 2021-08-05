import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  CssBaseline,
  Button 
} from '@material-ui/core';
import {
  getAllProductAct,
} from '../../../store/products/products.action';
//COMPONENTS
import ProductList from '../../../components/admin/products/product.table'

function Products () {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.all);
  const loading = useSelector(state => state.products.loading);

  const callProduct = useCallback(() => {
    dispatch(getAllProductAct())
    }, []);

  useEffect(() => {
    callProduct();
  }, []);

  return (
    <div>
      <ProductList data={products} loading={loading}/>
    </div>
  )
};

export default Products;
