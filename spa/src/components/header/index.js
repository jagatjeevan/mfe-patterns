import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { label } from "../../configs/labels";
import { withCart } from "../../context/cartContext";
import {
  AppHeader,
  Count,
  PageContainer,
  StyledAppLogo,
  StyledCartButton,
} from "./style";

const Header = (props) => {
  const { cartContext } = props;
  const { state } = cartContext;
  console.log("header", state);
  const [productsInCart, setProductsInCart] = useState(state.productsIds);

  useEffect(() => {
    setProductsInCart(state.productsIds);
  }, [props.cartContext.state])

  const getCount = () =>
    productsInCart.length ? <Count>{productsInCart.length}</Count> : null;

  return (
    <AppHeader>
      <PageContainer>
        <StyledAppLogo>
          <Link to="/">{label.logoName}</Link>
        </StyledAppLogo>
        <StyledCartButton>
          <Link to="/cart">
            {getCount()}
            {label.cartText}
          </Link>
        </StyledCartButton>
      </PageContainer>
    </AppHeader>
  );
};

export default withCart(Header);
