import { createGlobalStyle } from 'styled-components';

import { pixelToRem } from '../utils/utils';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${pixelToRem(14)};
    color: ${(props) => props.theme.color.page.background};
  }

  html, body {
    padding: 0;
    margin: 0;
    border: none;
    outine: 0;
 
    height: 100vh;
    background-image: ${(props) => props.theme.color.page.backgroundImage};
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
`;
