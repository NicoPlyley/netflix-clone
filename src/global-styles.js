import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html, body {
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #000000;
      color: #333333;
      font-size: 16px;
      margin: 0;
    }
`