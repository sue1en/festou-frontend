import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router'

const Header = () => {
  return(
    <HeaderTag>
      <h1>( ͡° ͜ʖ ͡°) ADMIN</h1>
      <Nav>
          <Link to="/admin">Home</Link>
          <Link to="categories">Categorias</Link>
          <Link to="products">Produtos</Link>
          <Link to="suppliers">Fornecedores</Link>
          <Link to="clients">Clientes</Link>
          <Link to="admin"> Admin</Link>
          <Link to="signin">Login</Link>
      </Nav>
    </HeaderTag>
  )
}

export default Header;

//estilos
const HeaderTag = styled.header`
  background-color:#cccccc;
  padding:20px;
  display:flex;
`
const Nav = styled.nav`
  ul{
    display:flex;
    text-decoration:none;
    list-style:none;
    padding:10px;
    li{
      padding:0 10px;
    }
  }
`