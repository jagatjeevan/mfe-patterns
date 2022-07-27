import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import Recommended from "./components/recommended";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Recommended />
  </ThemeProvider>,
  document.querySelector("#recommend-root")
);
