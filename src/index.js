import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import Routers from './routers';
import ReduxToastr from './components/redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import GlobalStyle from './config/globalStyled'
import { ThemeProvider } from 'styled-components'
import theme from './plugins/theme'

ReactDOM.render(
  <Provider store={store}>
    <ReduxToastr/>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Routers />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
  );
  
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  
  // reportWebVitals();
  // import reportWebVitals from './reportWebVitals';