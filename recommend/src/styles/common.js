import styled from "styled-components";

export const PageContainer = styled.article`
  max-width: ${(props) => props.theme.width.pageWidth};
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  height: 100%;
`;

export const ProductTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const StyledProductTileContainer = styled(ProductTileContainer)`
  & img {
    width: 100%;
  }
`;