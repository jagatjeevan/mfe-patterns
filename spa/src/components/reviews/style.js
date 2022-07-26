import styled from "styled-components";

export const ReviewListContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: ${(props) => props.theme.borders.productBorderStyle};
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 35px 1fr;
  box-shadow: 0 0 2px 2px #dedede;
  padding: 15px;
`;

export const StyledReviewContainer = styled(ReviewContainer)`
  & img {
    border-radius: 50%;
    align-self: center;
    justify-self: center;
  }

  & b {
    align-self: center;
  }

  & p {
    grid-column-start: 1;
    grid-column-end: -1;
    margin-top: 10px;
    font-size: 0.75rem;
    line-height: 1rem;
    max-height: calc(0.75rem * 4);
    overflow: hidden;
    margin-bottom: 0;
  }
`;