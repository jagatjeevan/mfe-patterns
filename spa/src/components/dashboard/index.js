import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";
import {withCart} from '../../context/cartContext';
import ProductTile from "../productTile";
import {
  DashboardContainer,
  Loading,
  StyledProductTileContainer,
} from "./style";

const Dashboard = (props) => {
  const {cartContext} = props;
  const {state, dispatch} = cartContext;
  const [products, setProducts] = useState(state.productsIds);

  useEffect(async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

    const handleUpdateToCart = (id) => {
      if (state.productsIds.includes(id)) {
        dispatch.removeFromCart(id);
      } else {
        dispatch.addToCart(id);
      }
    };


  const showProducts = () => {
    return products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
        cartState={state}
        handleUpdateToCart={handleUpdateToCart}
      />
    ));
  };


  if (!products.length) {
    return (
      <DashboardContainer>
        <Loading>{label.loading}</Loading>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <StyledProductTileContainer>{showProducts()}</StyledProductTileContainer>
    </DashboardContainer>
  );
};

export default withCart(Dashboard);
