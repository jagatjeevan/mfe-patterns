import styled from "styled-components";

export const AppLayout = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 50px;
`;

const AppContent = styled.article`
`;

export const StyledAppContent = styled(AppContent)`
  > div {
    height: 500px;
    max-height: calc(100vh - 110px);
    overflow: auto;
  }
`;