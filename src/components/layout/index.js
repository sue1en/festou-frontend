import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import Header from './header'
import Footer from './footer'
import HeaderItens from './headerItens';
import { mainStyle } from './layoutStyle'

const useStyles = makeStyles(mainStyle)

const Layout = (props) => {
  const classes = useStyles()

  return(
    <>
      {/* <HeaderItens/> */}
      <Header/>
      <Box className={classes.mainBox}>
        {props.children}
      </Box>
      <Footer/>
    </>
  )
}

export default Layout