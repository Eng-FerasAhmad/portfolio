import { createGlobalStyle } from 'styled-components';

import { pixelToRem } from '../utils/utils';
import { fontSize } from './common';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${pixelToRem(fontSize.base)};
    color: ${(props) => props.theme.color.page.background};
  }

  html, body {
    margin: 0;
    border: none;
    outline: 0;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
    letter-spacing: ${pixelToRem(1)};
  }

  p {
    font-weight: 200;
    letter-spacing: ${pixelToRem(1)};
  }
`;
