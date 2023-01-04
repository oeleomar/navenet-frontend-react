import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 5px;
    width: 30px;
    display: block;
    position: fixed;
    width: 3.3rem;
    height: 3.3rem;
    left: 25%;
    top: 15%;
    > svg {
      color: ${theme.colors.darkWhite};
    }
  `}
`;
