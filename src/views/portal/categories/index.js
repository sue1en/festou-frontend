import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from '@reach/router';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'
import { getByIdCategoryAct } from '../../../store/categories/category.action';
//icons
import ImageIcon from '@material-ui/icons/Image';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  categoryBox:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:'30px',
    width:'25%',
    minHeight:'75vh',
    padding:'25px',
    backgroundColor: '#fcfcfc',
    color: '#111111',
    margin:'0 60px 60px 0',
    boxShadow:'0 0 5px #b5b5b5',
    '& img':{
      width: '-webkit-fill-available',
      borderRadius:'20px',
    },
    '& h1':{
      margin:'0 0 20px 0',
    },
    '& p':{
      margin:'20px 0 0 0',
    },
  },
  productsBox: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    borderRadius:'30px',
    width:'70%',
    // margin:'0 60px 0 60px',
    minHeight:'75vh',
    backgroundColor: '#dbdbdb',
    padding:'25px',
    // boxShadow:'0 0 5px #b5b5b5',
  },
  productsCard:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: '#ffffff',
    color: '#111111',
    padding:'15px',
    borderRadius:'10px',
    boxShadow:'0 0 5px #b5b5b5',
    width:'100%',
  },
  productInfo:{
    width:'65%',
    '& h3':{
      marginBottom:'5px',
    },
    '& h5':{
      margin:'0 0 20px 0',
    },
    '& p':{
      margin:'20px 0 0 0',
    },
  },
  productImg:{
    backgroundColor: '#ccc',
    width:'30%',
    borderRadius:'5px',
  },
})

const Category = () =>{
  const classes = useStyles()
  const dispatch = useDispatch();
  const params = useParams();
  const categoryById = useSelector(state => state.categories.getById);
  const loading = useSelector(state => state.categories.loading);
  
  const callCategory = useCallback(() => {
    console.log(params.id)
    dispatch(getByIdCategoryAct(params.id))
  }, [dispatch]);
  
  console.log(JSON.stringify(categoryById))

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
