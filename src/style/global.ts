import { createGlobalStyle } from 'styled-components';

import { pixelToRem } from '../utils/utils';
import { fontSize } from './common';

export const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
      font-size: ${pixelToRem(fontSize.base)};
  }

  html, body {
    margin: 0;
    padding: 0;
    border: none;
    outline: 0;
    height: 100%;
    font-family: 'Rubik', sans-serif;
    font-weight: 200;
      background: ${(props) => props.theme.color.page.backgroundImage};
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: ${pixelToRem(1)};
  }

  p {
    font-weight: 200;
    letter-spacing: ${pixelToRem(1)};
  }
`;
