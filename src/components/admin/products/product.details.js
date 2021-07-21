import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  List,
  ListItem,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Divider,
} from '@material-ui/core'
//ICONS

//STYLES
import modalStyle from '../../../assets/styles/toModalForm.style'

const useStyled = makeStyles(modalStyle)

const ProductDetails = ({data}) => {
  const classes = useStyled()
  return (
    <Box className={classes.mainBox}>
      <h2>Descrição do Produto:</h2>
      <p>{data.description}</p>     
    </Box>
  )
};

export default ProductDetails;