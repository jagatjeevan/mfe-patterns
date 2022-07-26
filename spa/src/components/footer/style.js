import styled from "styled-components";

export const StyledAppFooter = styled.footer`
  > div {
    padding: 15px;
    box-shadow: 0px -3px 3px -3px rgb(0 0 0 / 75%);
    display: flex;
    justify-content: center;
    max-width: ${(props) => props.theme.width.pageWidth};
    width: 100%;
    margin: 0 auto;
  }

  & span {
    margin-left: 5px;
    margin-right: 5px;
    color: #f00;
  }
`;
