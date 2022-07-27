import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import Footer from "./components/footer";
import Header from "./components/header";
import { StyledAppContent, AppLayout } from './styles/layout';

const App = () => (
  <AppLayout className="App">
    <Header />
    <StyledAppContent><Cart /></StyledAppContent>
    <Footer />
  </AppLayout>
);;

export default App;
