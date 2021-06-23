import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    /* background-color:#F5F5F5; */
  }

  #root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`

export default GlobalStyle;