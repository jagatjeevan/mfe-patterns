import React from "react";
import { label } from "../../configs/labels";
import {
  StyledProductTile,
  ProductImageContainer,
  ProductTitle,
  ProductDescription,
  ProductActionContainer,
} from "./style";

const ProductTile = (props) => {
  const { product, cartState, handleUpdateToCart } = props;

  const getCartButton = (id) => {
    const addToCartText = cartState.productsIds.includes(id)
      ? label.removeFromCart
      : label.addToCart;
    return (
      <button onClick={() => handleUpdateToCart(id)}>{addToCartText}</button>
    );
  };

  return (
    <StyledProductTile key={product.id}>
      <ProductImageContainer>
        <img src={product.image} />
      </ProductImageContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductActionContainer>
        <b>
          {label.currency} {product.price}
        </b>
        {getCartButton(product.id)}
      </ProductActionContainer>
    </StyledProductTile>
  );
};

export default ProductTile;
