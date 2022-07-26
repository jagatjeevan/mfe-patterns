import React from "react";
import { Link } from "react-router-dom";
import { label } from "../../configs/labels";
import CartButton from '../productDetails/CartButton';
import {
  StyledProductTile,
  ProductImageContainer,
  ProductTitle,
  ProductDescription,
  ProductActionContainer,
} from "./style";

const ProductTile = (props) => {
  const { product, cartState, handleUpdateToCart } = props;

  return (
    <StyledProductTile key={product.id}>
      <ProductImageContainer>
        <img src={product.image} />
      </ProductImageContainer>
      <ProductTitle>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductActionContainer>
        <b>
          {label.currency} {product.price}
        </b>
        <CartButton
          id={product.id}
          handleUpdateToCart={handleUpdateToCart}
          productsInCart={cartState.productsIds}
        />
      </ProductActionContainer>
    </StyledProductTile>
  );
};

export default ProductTile;
