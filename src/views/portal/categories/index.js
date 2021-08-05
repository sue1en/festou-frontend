import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from '@reach/router';
import { makeStyles } from '@material-ui/core'
import { getByIdCategoryAct } from '../../../store/categories/category.action';
//style
import { categoryStyled } from '../../../assets/styles/categoryPortal.style';
//icons
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles(categoryStyled)

const Category = () =>{
  const classes = useStyles()
  const dispatch = useDispatch();
  const params = useParams();
  const categoryById = useSelector(state => state.categories.getById);
  const loading = useSelector(state => state.categories.loading);
  
  const callCategory = useCallback(() => {
    dispatch(getByIdCategoryAct(params.id))
  }, [dispatch]);

  useEffect(() => {
    callCategory();
  }, [callCategory]);

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div className={classes.root}>
     <div className={classes.categoryBox}>
        {/* {JSON.stringify(categoryById)} */}
        <h1>{categoryById.name || ''}</h1>
        <img src={process.env.REACT_APP_API + categoryById.image} alt={`Cat ${categoryById.name}`}/>
        <p>{categoryById.description}</p>
     </div>
     <div className={classes.productsBox}>
       {/* <p>Não há Produtos cadastrados</p> */}
       <div className={classes.productsCard}>
          <div  className={classes.productInfo}>
            <h3>Nome do produto</h3>
            <h5>Fornecedor exemplo</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className={classes.productImg}>
            <ImageIcon/>
          </div>
       </div>
     </div>
    </div>
  )
}

export default Category;
