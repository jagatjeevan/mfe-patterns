import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import {
  NoProducts,
  StyledProductTileContainer,
  StyledProductTile,
  ProductTitle,
  ProductImageContainer,
  ProductDescription,
  ProductActionContainer,
  PageContainer,
  CategoryHeading,
} from "./style";

const Categories = (props) => {
  const { categoryName, cartContext, isCategoryPassed } = props;
  const { category } = useParams();
  const { state, dispatch } = cartContext;

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const nameOfCategory = isCategoryPassed ? categoryName : category;

    fetch(
      `https://fakestoreapi.com/products/category/${nameOfCategory}?limit=10`
    )
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

  if (isCategoryPassed) {
    return (
      <>
        <StyledProductTileContainer>
          {showProducts()}
        </StyledProductTileContainer>
      </>
    );
  } else {
    return (
      <PageContainer>
        <CategoryHeading>{category}</CategoryHeading>
        <StyledProductTileContainer>
          {showProducts()}
        </StyledProductTileContainer>
      </PageContainer>
    );
  }
};

export default withCart(Categories);
