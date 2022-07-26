import React, { useEffect, useState } from "react";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import {
  NoProducts,
  StyledProductTileContainer,
  CategoryHeading,
  StyledProductTile,
  ProductTitle,
  ProductImageContainer,
  ProductDescription,
  ProductActionContainer,
} from "./style";

const Categories = (props) => {
  const { categoryName, cartContext } = props;
  const { state, dispatch } = cartContext;

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}?limit=10`)
      .then((res) => res.json())
      .then((json) => setProducts(json));

    return () => {
      setProducts([]);
    };
  }, [props.categoryName]);

  const handleUpdateToCart = (id) => {
    if (state.productsIds.includes(id)) {
      dispatch.removeFromCart(id);
    } else {
      dispatch.addToCart(id);
    }
  };

  const getCartButton = (id) => {
    const addToCartText = state.productsIds.includes(id)
      ? label.removeFromCart
      : label.addToCart;
    return (
      <button onClick={() => handleUpdateToCart(id)}>{addToCartText}</button>
    );
  };

  const showProducts = () => {
    return products.map((product) => (
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
    ));
  };

  if (!products.length) return <NoProducts>{label.noProducts}</NoProducts>;

  return (
    <>
      <CategoryHeading>{categoryName}</CategoryHeading>
      <StyledProductTileContainer>{showProducts()}</StyledProductTileContainer>
    </>
  );
};

export default withCart(Categories);
