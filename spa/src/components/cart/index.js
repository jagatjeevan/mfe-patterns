import React, { useState, useEffect } from "react";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import ProductTile from "../productTile";
import {  NoProducts, StyledProductTileContainer } from "./style";
import { PageContainer } from '../../styles/common';

const Cart = (props) => {
  const { cartContext } = props;
  const { state, dispatch } = cartContext;

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const productsInCart = state.productsIds || [];
    const productsResponse = await Promise.all(
      productsInCart.map((productId) =>
        fetch(`https://fakestoreapi.com/products/${productId}`)
      )
    );
    const products = await Promise.all(
      productsResponse.map((res) => res.json())
    );

    setProducts(products);
  }, [props.cartContext.state]);

    const handleUpdateToCart = (id) => {
      if (state.productsIds.includes(id)) {
        dispatch.removeFromCart(id);
      } else {
        dispatch.addToCart(id);
      }
    };

  const showProducts = () =>
    products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
        cartState={state}
        handleUpdateToCart={handleUpdateToCart}
      />
    ));

  if (!products.length) return <NoProducts>{label.noProducts}</NoProducts>;

  return <PageContainer><StyledProductTileContainer>{showProducts()}</StyledProductTileContainer></PageContainer>;
};

export default withCart(Cart);
