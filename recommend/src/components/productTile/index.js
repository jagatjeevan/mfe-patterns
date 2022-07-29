import React from "react";
import { label } from "../../configs/labels";
import {
  Rating,
  ReviewCount,
  RatingContainer,
  StyledProductTile,
  ProductImageContainer,
  ProductTitle,
  ProductDescription,
  StyledProductActionContainer,
} from "./style";

const ProductTile = (props) => {
  const { product } = props;

  return (
    <StyledProductTile key={product.id}>
      <ProductImageContainer>
        <img src={product.image} />
      </ProductImageContainer>
      <ProductTitle>
        <a href={`/products/${product.id}`}>{product.title}</a>
      </ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <StyledProductActionContainer>
        <b>
          <strong>{label.currency}</strong> <span>{product.price}</span>
        </b>
        <RatingContainer>
          <Rating>{product.rating.rate} out of 5</Rating>
          <ReviewCount>Reviews : {product?.rating?.count}</ReviewCount>
        </RatingContainer>
      </StyledProductActionContainer>
    </StyledProductTile>
  );
};

export default ProductTile;
