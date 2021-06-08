import React, { useState, useEffect, useCallback } from 'react';
import { createCategoryAct, getAllCategoryAct } from '../../../store/categories/category.action';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/admin/form'

function Categories () {
  const dispatch = useDispatch();
  // // const [modal, setModal] = React.useState({
  //   //   status: false
  //   // })

  const category = useSelector(state => state.categories.all?.data);
  //   const loadingSelector = useSelector(state => state.categories.loading)
    
  useEffect(() => {
    dispatch(getAllCategoryAct());
  }, [dispatch]);
    

  const handleSubmit = (form) => dispatch(createCategoryAct(form))
  
  return (
    <div>
      <h1>Categories Categories Categories</h1>
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
            {category?.map((category, i)=> (
                <tr key={i}>
                    <th>{category.id}</th>
                    <td>{category.name}</td>
                    <td><img src={category.image}/></td>
                </tr>
            ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <Form submit={handleSubmit}/>
      <br/>
      <br/>
    </div>
  )
};

export default Categories;