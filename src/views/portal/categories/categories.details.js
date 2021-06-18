import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdCategoryAct } from '../../../store/categories/category.action';

const CategoryDetail = (props) =>{
  const dispatch = useDispatch();
  // const { categoryId } = useParams();

  const category = useSelector(state => state.categories.getById);
  //   const loadingSelector = useSelector(state => state.categories.loading)
  console.log()  
  console.log(category)  
  useEffect(() => {
    dispatch(getByIdCategoryAct(props.id));
  }, [dispatch]);

  return (
    <div>
      <h1>Categories Categories Categories</h1>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
        {JSON.stringify(category)}
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
    </div>
  )
}

export default CategoryDetail;