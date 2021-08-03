import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdSupplierAct } from '../../../store/supplier/supplier.action';
import {
  makeStyles,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
} from '@material-ui/core'
//Icons
import ImageIcon from '@material-ui/icons/Image';
//style
import { dashHomeStyle } from '../../../assets/styles/dashboardHome.style';

const useStyled = makeStyles(dashHomeStyle)

const SupplierHome = () => {
  const classes = useStyled()
  const dispatch = useDispatch();
  const supplierById = useSelector(state => state.suppliers.getById);
  const loading = useSelector(state => state.suppliers.loading)
  const userId = useSelector(state => state.auth.user?.id);

  console.log(userId)
  
  const callSupplier = useCallback(() => {
    dispatch(getByIdSupplierAct(userId))
  }, [dispatch]);

  useEffect(() => {
    callSupplier();
  }, [callSupplier])

  if(loading){
    return <h1>Loading...</h1>
  }

  return(
    <div className={classes.mainBody}>
      <List  className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemAvatar className={classes.listAvatar}>
            <Avatar src={process.env.REACT_APP_API + supplierById.image} alt={`Cat ${supplierById.name}`}/>
          </ListItemAvatar>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Nome:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.tradeName || ''}
          </ListItemText>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Cnpj:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.cnpj || ''}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Email:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.email}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Tipo de Perfil:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.kind}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Endereço:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.address}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Cidade:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.city}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Uf:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.uf}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Telefone:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.phoneNumber}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Descrição:</ListSubheader>
          <ListItemText className={classes.listText}>
            {supplierById.description}
          </ListItemText>
        </ListItem>
      </List>
    
    </div>
  )
}

export default SupplierHome