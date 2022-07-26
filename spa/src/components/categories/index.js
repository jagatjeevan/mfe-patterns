import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import ProductTile from '../productTile/index';
import {
  NoProducts,
  StyledProductTileContainer,
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

  const showProducts = () => {
    return products.map((product) => (
      <ProductTile
        key={product.id}
        product={product}
        cartState={state}
        handleUpdateToCart={handleUpdateToCart}
      />
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
