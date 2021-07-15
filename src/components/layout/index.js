import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import Header from './header'
import Footer from './footer'
import { mainStyle } from './layoutStyle'

const useStyles = makeStyles(mainStyle)

const Layout = (props) => {
  const classes = useStyles()

  return(
    <>
      <Header/>
      <Container className={classes.mainBox}>
        {props.children}
      </Container> 
      <Footer/>
    </>
  )
}

export default Layout