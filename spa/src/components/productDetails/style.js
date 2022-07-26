import styled from "styled-components";

export const ProductDetailContainer = styled.article`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 1fr;
  grid-gap: 20px;
  padding-bottom: 20px;
  border-bottom: ${(props) => props.theme.borders.productBorderStyle};
  margin-bottom: 20px;
`;

export const ProductImage = styled.div`
    text-align: center;
`;

export const StyledProductImage = styled(ProductImage)`
  & img {
    width: auto;
    max-height: 180px;
    height: 100%;
  }
`;

export const AddToCartContainer = styled.div`
  text-align: center;
`;

export const ProductTitle = styled.h2`
  margin-top: 0;
`;
