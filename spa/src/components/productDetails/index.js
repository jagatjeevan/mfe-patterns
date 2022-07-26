import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { withCart } from "../../context/cartContext";
import { PageContainer } from "../../styles/common";
import Reviews from "../reviews";
import Details from "./Details";

const ProductDetails = (props) => {
  const { cartContext } = props;
  const { state, dispatch } = cartContext;
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ).then((res) => res.json());
    setProduct(product);
  }, []);

  const addToCart = (id) => {
    if(state.productsIds.includes(id)) {
        dispatch.removeFromCart(id);
    } else {
        dispatch.addToCart(id);
    }
  };

  return (
    <PageContainer>
      <Details
        product={product}
        handleUpdateToCart={addToCart}
        productsInCart={state.productsIds}
      />
      <Reviews />
    </PageContainer>
  );
};

export default withCart(ProductDetails);
