import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Typography,
} from '@material-ui/core';

import {footerStyle} from './layoutStyle.js';
import BlackLogo from '../../assets/images/logo/FestouBlackLogo.svg';
import WhiteLogo from '../../assets/images/logo/FestouWhiteLogo.svg'


const useStyles = makeStyles(footerStyle)

const Footer = () => {
  const classes = useStyles()

  return(
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <div className={classes.brandingBox}>
          <img src={WhiteLogo} alt='FestouFooterLogo'/>
          <p>Todos os direitos reservados ©</p>
        </div>
      </AppBar>
    </div>
  )
}

export default Footer;
