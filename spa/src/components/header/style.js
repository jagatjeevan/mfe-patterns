import styled from 'styled-components';

export const AppHeader = styled.header`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.headerBackgroundColor};
  box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.75);
  width: 100%;
`;

export const PageContainer = styled.div`
  max-width: ${(props) => props.theme.width.pageWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  alignitems: center;
`;

const AppLogo = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.logoColor};
`;

export const StyledAppLogo = styled(AppLogo)`
  & a {
    text-decoration: none;
  }
`;

const CartButton = styled.button`
  background-color: ${(props) => props.theme.colors.logoColor};
  color: ${(props) => props.theme.colors.cartTextColor};
  border: 0;
  padding: 5px 20px;
  border-radius: ${(props) => props.theme.borders.radius};
  position: relative;
`;

export const StyledCartButton = styled(CartButton)`
  & a {
    text-decoration: none;
  }

  & span {
    content: ${props => props.count}
  }
`;

export const Count = styled.span`
  position: absolute;
  top: -10px;
  left: -10px;
  background: ${(props) => props.theme.colors.countBackgroundColor};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  color: ${(props) => props.theme.colors.countColor};
  padding: 5px;
  border-radius: 50%;
  font-size: 10px;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;