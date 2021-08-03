import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdAdminAct } from '../../../store/admin/admin.action';
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

const AdminHome = () => {
  const classes = useStyled()
  const dispatch = useDispatch();
  const adminById = useSelector(state => state.admin.getById);
  const loading = useSelector(state => state.admin.loading)
  const userId = useSelector(state => state.auth.user?.id);
  const callAdmin = useCallback(() => {
    dispatch(getByIdAdminAct(userId))
  }, [dispatch]);

  useEffect(() => {
    callAdmin();
  }, [callAdmin])

  if(loading){
    return <h1>Loading...</h1>
  }

  return(
    <div className={classes.mainBody}>
      <List  className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Nome:</ListSubheader>
          <ListItemText className={classes.listText}>
            {adminById.name || ''}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Email:</ListSubheader>
          <ListItemText className={classes.listText}>
            {adminById.email || ''}
          </ListItemText>
        </ListItem>
        <ListItem  className={classes.listItem}>
          <ListSubheader className={classes.listItemTitle}>Tipo de Perfil:</ListSubheader>
          <ListItemText className={classes.listText}>
            {adminById.kind || ''}
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default AdminHome