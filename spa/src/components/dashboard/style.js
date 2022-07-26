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