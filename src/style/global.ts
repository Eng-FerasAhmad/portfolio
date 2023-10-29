import { createGlobalStyle } from 'styled-components'

import { pixelToRem } from '../utils/utils'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${pixelToRem(14)};
    color: black;
  }

  html, body {
    padding: 0;
    margin: 0;
    border: none;
    outine: 0;
    width: 100%;
    height: 100vh;
    background: #F5F5F5;
    font-family: 'Helvetica', 'Catamaran', 'Arial', 'sans-serif';
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', 'Catamaran', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px;
  }

  p {
    font-family: 'Helvetica', 'Catamaran', 'Arial', 'sans-serif';
    font-weight: 200;
    letter-spacing: 1px;
  }
`
