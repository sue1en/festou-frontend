import React, { useState, useEffect, useCallback } from 'react';
import { createCategoryAct, getAllCategoryAct } from '../../../store/categories/category.action';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
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
    <CategoryBody>
      <h1>Categories</h1>
      <br/>
      <hr/>
      <br/>
      <AllCategoriesList/>
      <br/>
      <br/>
      {/* <Form submit={handleSubmit}/> */}
      <br/>
      <br/>
    </CategoryBody>
  )
};

export default Categories;

const CategoryBody = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`