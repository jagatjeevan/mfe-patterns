import React from "react";
import ReactDOM from "react-dom";
import Reviews from "./components/reviews/index";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme/default';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Reviews />
  </ThemeProvider>,
  document.querySelector("#review-root")
);
