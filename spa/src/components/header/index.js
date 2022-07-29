import React, { useState } from "react";
import { label } from "../../configs/labels";
import {
  AppHeader,
  Count,
  PageContainer,
  StyledAppLogo,
  StyledCartButton,
} from "./style";

const Header = () => {
  const [productsInCart] = useState(
    JSON.parse(window.localStorage.getItem("products")) || []
  );

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
