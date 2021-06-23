import React from 'react'
import { Link } from '@reach/router'
import { ListItem, ListItemIcon, ListItemText, Divider }  from '@material-ui/core'
import styled from 'styled-components'
import {
  Category as CategoryIcon,
  LocalMall as ProductsIcon,
  BusinessCenter as FornecedoresIcon,
  People as ClientsIcon,
} from '@material-ui/icons';

export const DashboardItens = (
  <div> 
    <Divider/>
    <ListItem component={Link} to="categories">
      <ListItemIcon><CategoryIcon/></ListItemIcon>
      <ListItemText primary="Categorias"/>
    </ListItem>
    <Divider/>
    <ListItem component={Link} to="products">
      <ListItemIcon><ProductsIcon/></ListItemIcon>
      <ListItemText primary="Produtos"/>
    </ListItem>
    <Divider/>
    <ListItem component={Link} to="supplier">
      <ListItemIcon><FornecedoresIcon/></ListItemIcon>
      <ListItemText primary="Fornecedor"/>
    </ListItem>
    <Divider/>
    <ListItem component={Link} to="clients">
      <ListItemIcon><ClientsIcon /></ListItemIcon>
      <ListItemText primary="Clientes"/>
    </ListItem>
    <Divider/>
  </div>
);

//estilos
// const div = styled.div`
  
// `
// const NavBar = styled.div`
//   background-color:#cccccc;
//   padding:20px;
//   display:flex;
// `
// const Nav = styled.nav`
//   display:flex;
//   flex-direction: column;
// `