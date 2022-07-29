import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { PageContainer } from "../../styles/common";
import Recommended from "../recommended";
import Reviews from "../reviews";
import Details from "./Details";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [storedIds, setStoredIds] = useState(
    JSON.parse(window.localStorage.getItem("products") || "[]")
  );
  const [category, setCategory] = useState("");

  useEffect(async () => {
    const product = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    ).then((res) => res.json());
    setProduct(product);
    window.localStorage.setItem("category", product.category);
    setCategory(product.category);
  }, []);

  const addToCart = (id) => {
    let updatedIds;
    if (storedIds.includes(id)) {
      updatedIds = storedIds.filter((item) => item !== id);
      const removeFromCartEvent = new CustomEvent("REMOVE_FROM_CART", {
        detail: { productId: id },
      });
      window.dispatchEvent(removeFromCartEvent);
    } else {
      const event = new CustomEvent("ADD_TO_CART", {
        detail: { productId: id },
      });
      window.dispatchEvent(event);
    }
    window.localStorage.setItem("products", JSON.stringify(updatedIds));
    setStoredIds(updatedIds);
  };

  return (
    <PageContainer>
      <Details
        product={product}
        handleUpdateToCart={addToCart}
        productsInCart={storedIds}
      />
      <Reviews />
      <Recommended />
    </PageContainer>
  );
};

export default ProductDetails;
