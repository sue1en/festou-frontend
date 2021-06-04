import React from 'react';
import Header from './header'
import Footer from './footer'

const LayoutAdmin = (props) => {
  return(
    <>
      <Header/>
        {props.children}
      <Footer/>
    </>
  )
}

export default LayoutAdmin