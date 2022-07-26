import React from "react";
import CartButton from "./CartButton";
import { AddToCartContainer, ProductDetailContainer, ProductTitle, StyledProductImage } from "./style";

const Details = ({ product, handleUpdateToCart, productsInCart }) => {
  return (
    <ProductDetailContainer>
      <StyledProductImage>
        <img
          src={product.image}
          width="200"
          alt={product.title}
          className="product-image"
        />
      </StyledProductImage>
      <div>
        <ProductTitle>{product.title}</ProductTitle>
        <p>{product.description}</p>
        <div>
          Ratings: {product?.rating?.rate} out of 5. <br />
          No. of ratings: {product?.rating?.count}
        </div>
      </div>
      <AddToCartContainer>
        <CartButton
          id={product.id}
          handleUpdateToCart={handleUpdateToCart}
          productsInCart={productsInCart}
        />
      </AddToCartContainer>
    </ProductDetailContainer>
  );
};

export default Details;
