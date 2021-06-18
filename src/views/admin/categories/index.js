import React, { useState, useEffect, useCallback } from 'react';
import { createCategoryAct, getAllCategoryAct } from '../../../store/categories/category.action';
import { useDispatch, useSelector } from 'react-redux';
//COMPONENTS
import AllCategoriesList from '../../../components/admin/categories/categories.list'
import Form from '../../../components/admin/categories/categories.form'

function Categories () {
  const dispatch = useDispatch();
  // // const [modal, setModal] = React.useState({
  //   //   status: false
  //   // })

  const handleSubmit = (form) => dispatch(createCategoryAct(form))
  
  return (
    <div>
      <h1>Categories Categories Categories</h1>
      <br/>
      <br/>
      <hr/>
      <br/>
      <AllCategoriesList/>
      <br/>
      <br/>
      <Form submit={handleSubmit}/>
      <br/>
      <br/>
    </div>
  )
};

export default Categories;