import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  CssBaseline,
  Button 
} from '@material-ui/core';
import {
  getAllClientAct,
} from '../../../store/clients/clients.action';
//COMPONENTS
import ClientsList from '../../../components/admin/clients/clients.table'


function Clients () {
  const dispatch = useDispatch();

  const clients = useSelector(state => state.clients.all);
  const loading = useSelector(state => state.clients.loading);

  const callProduct = useCallback(() => {
    dispatch(getAllClientAct())
    }, []);

  useEffect(() => {
    callProduct();
  }, []);

  return (
    <div>
      <ClientsList data={clients} loading={loading}/>
    </div>
  )
};

export default Clients;
