import { createGlobalStyle } from 'styled-components';

import { pixelToRem } from '../utils/utils';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${pixelToRem(14)};
    color: ${(props) => props.theme.color.page.background};
  }

  html, body {
    padding: ${pixelToRem(50, 0, 0, 0)};
    margin: 0;
    border: none;
    outline: 0;
    background-image: ${(props) => props.theme.color.page.backgroundImage};
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
