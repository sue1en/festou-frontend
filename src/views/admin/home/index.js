import React from 'react';
import { useSelector } from 'react-redux';
import AdminHome from './admin-home'
import SupplierHome from './supplier-home'
import ClientHome from './client-home'
import { makeStyles } from '@material-ui/core'
import { dashHomeStyle } from '../../../assets/styles/dashboardHome.style';

const useStyled = makeStyles(dashHomeStyle)

const Home = () => {
  const classes = useStyled()
  const userKind = useSelector(state => state.auth.user?.kind);

  const userPanel = () => {
    switch(userKind){
      case 1:
        return <AdminHome/>
      case 2:
        return <SupplierHome/>
      case 3:
        return <ClientHome/>
      default:
        return false
    }
  }

  return(
    <div classeName={classes.root}>
      <div classeName={classes.sectionHeader}>
        <h1>Bem vindo ao seu painel de controle</h1>
      </div>
      {userPanel()}
    </div>
  )
}

export default Home