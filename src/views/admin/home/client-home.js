import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdClientAct } from '../../../store/clients/clients.action'
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'
//Icons
import ImageIcon from '@material-ui/icons/Image';
//style
import { dashHomeStyle } from '../../../assets/styles/dashboardHome.style';

const useStyled = makeStyles(dashHomeStyle)

const ClientHome = () => {
  const classes = useStyled()
  const dispatch = useDispatch();
  const clientById = useSelector(state => state.clients.getById);
  const loading = useSelector(state => state.clients.loading)
  const userId = useSelector(state => state.auth.user?.id);

  console.log(userId)
  
  const callSupplier = useCallback(() => {
    dispatch(getByIdClientAct(userId))
  }, [dispatch]);

  useEffect(() => {
    callSupplier();
  }, [callSupplier])

  if(loading){
    return <h1>Loading...</h1>
  }

  return(
    <div className={classes.mainBody}>
      {JSON.stringify(clientById)}
      <List  className={classes.list}>
        {/* <ListItem className={classes.listItem}>
          <ListItemText className={classes.listText}>
            <img src={process.env.REACT_APP_API + clientById.image} alt={`Cat ${clientById.name}`}/>
          </ListItemText>
        </ListItem> */}
        {/* <ListItem className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Nome:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.name || ''}
          </ListItemText>
        </ListItem> */}
        {/* <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Email:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.email}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Tipo de Perfil:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.kind}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Data de Nascimento:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.birthdate}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Endereço:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.address}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Cidade:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.city}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Uf:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.uf}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Telefone:</ListSubheader>
          <ListItemText className={classes.listText}>
            {clientById.phoneNumber}
          </ListItemText>
        </ListItem> */}
      </List>
    </div>
  )
}

export default ClientHome