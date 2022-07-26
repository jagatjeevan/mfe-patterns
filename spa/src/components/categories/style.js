import styled from "styled-components";

export const NoProducts = styled.div`
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CategoryHeading = styled.h3`
  margin-bottom: 30px;
  border-bottom: ${(props) => props.theme.borders.borderStyle};
  text-transform: capitalize;
`;

export const PageContainer = styled.article`
  max-width: ${(props) => props.theme.width.pageWidth};
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  height: 100%;
`;

export const ProductTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const StyledProductTileContainer = styled(ProductTileContainer)`
  & img {
    width: 100%;
  }
`;

export const ProductTile = styled.div`
  border: ${(props) => props.theme.borders.productBorderStyle};
  padding: 25px;
`;

export const StyledProductTile = styled(ProductTile)`
  &:hover {
    box-shadow: 0px 0px 3px 4px #c5c5c5;
  }
`;

export const ProductImageContainer = styled.div`
  max-height: 150px;
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0 4px 4px 0px #848383;
`;

export const ProductDescription = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  max-height: calc(0.75rem * 4);
  overflow: hidden;
  margin-top: 20px;
  text-align: left;
`;

export const ProductTitle = styled.div`
  font-size: 1.25rem;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 2);
  height: calc(1.5rem * 2);
  overflow: hidden;
`;

export const ProductActionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;