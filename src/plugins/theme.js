import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ad5ddb',
      light: 'rgba(173, 93, 219, 0.225)',
      // dark: '#000000',
      // contrastText: '#000000',
    },
    secondary: {
      main: '#f90b7d',
      light: 'rgba(249, 11, 125, 0.225)',
    },
    third: {
      main: '#00dbff',
      light: 'rgba(0, 219, 255, 0.225)',
    },
    background: {
      main:'#fcfcfc',
    },
    whitee: {
      main:'#fcfcfc',
    },
    blackee: {
      main:'#111111',
      light:'#828282',
    },
    navBarLink:{
      main:'#363636'
    }
  },
});


export default theme