import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router'

const Header = () => {
  return(
    <HeaderTag>
      <h1>( ͡° ͜ʖ ͡°)</h1>
      <Nav>
          <Link to="/">Home</Link>
          <Link to="#">Categorias</Link>
          <Link to="products">Produtos</Link>
          <Link to="#">Sobre</Link>
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