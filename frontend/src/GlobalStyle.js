import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-size: 112.5%;
    font-family: sans-serif;
  }
  
  button, input, select, textarea {
    font-size: 1em;
    font-family: inherit;
  }
`
