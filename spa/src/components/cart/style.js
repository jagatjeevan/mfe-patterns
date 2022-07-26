import styled from "styled-components";
import { StyledProductTileContainer } from "../../styles/common";

export const NoProducts = styled.div`
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CartTileContainer = styled(StyledProductTileContainer)`
  grid-template-columns: repeat(auto-fit, minmax(220px, 300px));
`;