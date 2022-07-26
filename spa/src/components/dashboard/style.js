import styled from 'styled-components';

export const DashboardContainer = styled.article`
  max-width: ${(props) => props.theme.width.pageWidth};
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  height: 100%;
`;

export const Loading = styled.div`
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

export const ProductTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const StyledProductTileContainer = styled(ProductTileContainer)`
  & img {
    width: 100%;
  }
`;