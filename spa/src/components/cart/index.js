import React, { useState, useEffect } from "react";
import { label } from "../../configs/labels";
import ProductTile from "../productTile";
import {  NoProducts } from "./style";
import { PageContainer, StyledProductTileContainer } from '../../styles/common';

const Cart = () => {

  const [products, setProducts] = useState([]);
  const [productIds] = useState(JSON.parse(window.localStorage.getItem("products")) || [])

  useEffect(async () => {
    const productsResponse = await Promise.all(
      productIds.map((productId) =>
        fetch(`https://fakestoreapi.com/products/${productId}`)
      )
    );
    const products = await Promise.all(
      productsResponse.map((res) => res.json())
    );

    setProducts(products);
  }, []);

  const showProducts = () =>
    products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
      />
    ));

  if (!products.length) return <NoProducts>{label.noProducts}</NoProducts>;

  return <PageContainer><StyledProductTileContainer>{showProducts()}</StyledProductTileContainer></PageContainer>;
};

export default Cart;
