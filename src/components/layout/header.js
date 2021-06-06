import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  ToolBar,
  IconButton,
  MenuItem,
  Menu,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from '@material-ui/core'


const Header = () => {
  
  return(
    <HeaderTag>
      <NavLinkLogo to="/"><h1>( ͡° ͜ʖ ͡°)</h1></NavLinkLogo>
      <Nav>
        <NavLink to="categories"> Categorias</NavLink>
        <NavLink to="products"> Produtos</NavLink>
        <NavLink to="suppliers"> Fornecedores</NavLink>
        <NavLink to="clients"> Clientes</NavLink>
      </Nav>
      <NavLinkLogin to="signin"> Login</NavLinkLogin>
    </HeaderTag>
  )
}

export default Header;

//estilos
const HeaderTag = styled.header`
  background-color:${props => props.theme.main};
  height:60px;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
// const Logo = styled.div`
//   padding:0 10px;

// `
const NavLinkLogo = styled(Link)`
  padding:5px 0 5px 30px;
  text-decoration: none;
`

const Nav = styled.nav`
  padding:5px 15px;
`

const NavLinkLogin = styled(Link)`
  padding:5px 30px 5px 0;
  text-decoration: none;
  :hover{
    background-color:${props => props.theme.secondary};
  }
`

const NavLink = styled(Link)`
  padding:0 10px;
  text-decoration: none;
  :hover{
    background-color:${props => props.theme.secondary};
  }
`