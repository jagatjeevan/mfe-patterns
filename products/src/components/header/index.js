import React, { useState, useEffect } from "react";
import { label } from "../../configs/labels";
import {
  AppHeader,
  Count,
  PageContainer,
  StyledAppLogo,
  StyledCartButton,
} from "./style";

const Header = () => {
  const [productsInCart, setProductsInCart] = useState([]);

    const addToCartEventlistener = ({ detail }) => {
      const currentProductsInCart =
        JSON.parse(localStorage.getItem("products")) || [];
      const updatedProductsInCart = [
        ...currentProductsInCart,
        detail.productId,
      ];
      setProductsInCart(updatedProductsInCart);
      localStorage.setItem("products", JSON.stringify(updatedProductsInCart));
    };

    const removeFromCartEventlistener = ({ detail }) => {
      const currentProductsInCart =
        JSON.parse(localStorage.getItem("products")) || [];
      const updatedProductsInCart = currentProductsInCart.filter(
        (p) => p !== detail.productId
      );
      setProductsInCart(updatedProductsInCart);
      localStorage.setItem("products", JSON.stringify(updatedProductsInCart));
    };

    useEffect(() => {
      window.addEventListener("ADD_TO_CART", addToCartEventlistener);
      window.addEventListener("REMOVE_FROM_CART", removeFromCartEventlistener);
      return () => {
        window.removeEventListener("ADD_TO_CART", addToCartEventlistener);
        window.removeEventListener("REMOVE_FROM_CART", addToCartEventlistener);
      };
    }, []);

  const getCount = () =>
    productsInCart.length ? <Count>{productsInCart.length}</Count> : null;

  return (
    <AppHeader>
      <PageContainer>
        <StyledAppLogo>
          <a href="/products/">{label.logoName}</a>
        </StyledAppLogo>
        <StyledCartButton>
          <a href="/cart/">
            {getCount()}
            {label.cartText}
          </a>
        </StyledCartButton>
      </PageContainer>
    </AppHeader>
  );
};

export default Header;
