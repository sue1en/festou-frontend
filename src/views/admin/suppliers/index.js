import React, { useState, useEffect, useCallback } from 'react';
import { createSupplierAct, getAllSupplierAct } from '../../../store/supplier/supplier.action';
import { useDispatch, useSelector } from 'react-redux';

function Suppliers () {
  const dispatch = useDispatch();
  // // const [modal, setModal] = React.useState({
  //   //   status: false
  //   // })

  const supplier = useSelector(state => state.suppliers.all?.data);
  //   const loadingSelector = useSelector(state => state.categories.loading)
    
  useEffect(() => {
    dispatch(getAllSupplierAct());
  }, [dispatch]);
    

  // const handleSubmit = (form) => dispatch(createSupplierAct(form))
  
  return (
    <div>
      <h1>Suppliers Suppliers Suppliers</h1>
      <br/>
      <br/>
      <hr/>
      <br/>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>imagem</th>
            </tr>
        </thead>
        <tbody>
            {supplier?.map((supplier, i)=> (
                <tr key={i}>
                    <th>{supplier.id}</th>
                    <td>{supplier.cnpj}</td>
                    <td>{supplier.tradename}</td>
                    <td><img src={supplier.status}/></td>
                </tr>
            ))}
        </tbody>
      </table>
      <br/>
      <br/>
      {/* <Form submit={handleSubmit}/> */}
      <br/>
      <br/>
    </div>
  )
};

export default Suppliers;