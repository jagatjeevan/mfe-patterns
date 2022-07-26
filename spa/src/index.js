import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import App from './App';

import theme from './styles/theme/default';
import { GlobalStyle } from "./styles/global";
import { Provider as CartProvider } from './context/cartContext';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </CartProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
