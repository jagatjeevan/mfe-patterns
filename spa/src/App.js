import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/cart";
import Categories from "./components/categories";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductDetails from "./components/productDetails";
import { StyledAppContent, AppLayout } from './styles/layout';

const App = () => (
  <AppLayout className="App">
    <Header />
    <StyledAppContent>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/:category" element={<Categories />} />
        </Routes>
      </div>
    </StyledAppContent>
    <Footer />
  </AppLayout>
);;

export default App;
