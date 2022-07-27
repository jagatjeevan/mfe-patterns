import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";
import { StyledProductTileContainer } from "../../styles/common";
import ProductTile from "../productTile";

const Recommended = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const category = "jewelery";
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleUpdateToCart = () => {
  };

  const showProducts = () => {
    return products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
        cartState={{ productsIds : []}}
        handleUpdateToCart={handleUpdateToCart}
      />
    ));
  };

  return (
    <>
      <h3>{label.recommendedForYou}</h3>
      <StyledProductTileContainer>{showProducts()}</StyledProductTileContainer>
    </>
  );
};

export default Recommended;
