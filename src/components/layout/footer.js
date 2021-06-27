import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {footerStyle} from './layoutStyle.js'


const useStyles = makeStyles(footerStyle)

const Footer = () => {
  const classes = useStyles()

  return(
    <footer className={classes.root}>
      <p>Footer aqui!</p>
    </footer>
  )
}

export default Footer;

//estilos
// const FooterTag = styled.footer`
//   background-color:${props => props.theme.secondary};
//     position: relative;
//     bottom: 0;
//     width: 100vw;
//     height: 50px;
//   /* height:40px; */
// `