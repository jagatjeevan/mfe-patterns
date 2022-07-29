import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import { StyledProductTileContainer } from "../../styles/common";
import ProductTile from "../productTile";

const Recommended = (props) => {
  const { cartContext } = props;
  const { state } = cartContext;
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { category } = state;
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [props.cartContext.state.category]);

  const showProducts = () => {
    return products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
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

export default withCart(Recommended);
