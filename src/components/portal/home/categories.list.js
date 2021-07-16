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
    width:320,
    height: 320,
    margin: 16,
    borderRadius: 10,
    // position:'relative',
    background: '#eeeeee',
    // alignItems:'center',
  },
  media: {
    height: '85%',
  },
  overlay: {
    height: '15%',
    // padding: 10,
  },
  text: {
    textAlign: 'center',
    color:'#000000',
    fontSize:20,
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
            <CardMedia
              className={classes.media}
              component='img'
              src={process.env.REACT_APP_API + category.image}
              alt={category.name}
            />
            <CardActionArea>
              <CardContent className={classes.overlay}>
                <p className={classes.text}>
                  {category.name}
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Grid>
  )
}

export default AllCategoriesList;
