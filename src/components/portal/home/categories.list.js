import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@reach/router';
import {
  getAllCategoryAct,
  getByIdCategoryAct,
} from '../../../store/categories/category.action';
import{
  Grid,
  Typography,
  Collapse,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root:{
    flexGrow:1,
    justifyContent:'center',
  },

  card: {
    width:'300px',
    height:'180px',
    margin: 16,
    borderRadius: 10,
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    '&:hover':{
      
    },
  },
  cardMedia: {
    width: '100%',
    alignSelf:'center',
  },
  cardText: {
    position: 'absolute',
    textAlign: 'center',
    color:'#000000',
    fontSize:'25px',
    padding:'5px',
    textDecoration:'none',
  },
})

const AllCategoriesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modal, setModal] = useState({})
    
  const category = useSelector(state => state.categories.all?.data);
  // const loading = useSelector(state => state.categories.loading);
  // const selected = useSelector(state => state.categories.selected);
  // const getById = useSelector(state => state.categories.getById);


  const callCategory = useCallback(() => {
    dispatch(getAllCategoryAct())
    }, [dispatch]);

  useEffect(() => {
    callCategory();
  }, [callCategory]);


  return (
    <Grid container className={classes.root}>
      {category?.map((category, i)=> (
        <Link to={`/categories/${category.id}`}>
          <Card key={i} className={classes.card}>
            <p className={classes.cardText}>
              {category.name}
            </p>
            <CardMedia
              className={classes.cardMedia}
              component='img'
              src={process.env.REACT_APP_API + category.image}
              alt={category.name}
            />
          </Card>
        </Link>
      ))}
    </Grid>
  )
}

export default AllCategoriesList;
