import styled from "styled-components";

export const PageContainer = styled.article`
  max-width: ${(props) => props.theme.width.pageWidth};
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  height: 100%;
`;
