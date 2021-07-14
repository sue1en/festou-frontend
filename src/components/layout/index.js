import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import Header from './header'
import Footer from './footer'
import { mainStyle } from './layoutStyle'

const useStyles = makeStyles(mainStyle)

const Layout = (props) => {
  const classes = useStyles()

  return(
    <>
      
      <Header/>
      <div className={classes.mainBox}>
        {props.children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout