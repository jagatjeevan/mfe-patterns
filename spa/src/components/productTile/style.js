import styled from "styled-components";

export const ProductImageContainer = styled.div`
  max-height: 150px;
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0 4px 4px 0px #848383;
`;

export const ProductTitle = styled.div`
  font-size: 1.05rem;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 2);
  height: calc(1.5rem * 2);
  overflow: hidden;
  margin: 0 25px;
`;

export const ProductTile = styled.div`
  border: ${(props) => props.theme.borders.productBorderStyle};
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledProductTile = styled(ProductTile)`
  &:hover {
    box-shadow: 0px 0px 3px 4px #c5c5c5;
  }
`;

export const ProductDescription = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  max-height: calc(0.75rem * 4);
  overflow: hidden;
  margin: 20px 25px 0;
  text-align: left;
`;

export const ProductActionContainer = styled.div`
  margin: 20px 25px 25px;
  display: flex;
  justify-content: space-between;
`;