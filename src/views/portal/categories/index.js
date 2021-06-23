import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { getByIdCategoryAct } from '../../../store/categories/category.action';


const Category = (props) =>{
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
    <MainContainer>
     <CategoryInfo>
      {/* <div>
        {JSON.stringify(category.image)}
        {JSON.stringify(category.name)}
      </div>
      <div>
        {JSON.stringify(category.description)}
      </div> */}
     </CategoryInfo>
     <CategoryProducts>
       <p>Lista dos produtos aqui!!!</p>
     </CategoryProducts>
    </MainContainer>
  )
}

export default Category;

const MainContainer = styled.div`
  display: flex;
`

const CategoryInfo = styled.div`
  background-color: #e1e1e1;
  width: 30%;
  margin:20px
`

const CategoryProducts = styled.div`
  background-color: #e1e1e1;
  width: 60%;
  margin:20px

`