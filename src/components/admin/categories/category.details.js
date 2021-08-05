import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  makeStyles,
} from '@material-ui/core'
//ICONS

//STYLES
import modalStyle from '../../../assets/styles/toModalForm.style'

const useStyled = makeStyles(modalStyle)

const CategoryDetails = ({data}) => {
  const classes = useStyled()
  return (
    <Box className={classes.mainBox}>
      <h2>Descrição da Categoria:</h2>
      {data.description} 
    </Box>
  )
};

export default CategoryDetails;