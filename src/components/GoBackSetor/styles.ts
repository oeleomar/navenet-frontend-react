import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 5px;
    display: block;
    position: fixed;
    width: 3.3rem;
    height: 3.3rem;
    left: 35rem;
    top: 10.5rem;
    > svg {
      color: ${theme.colors.darkWhite};
    }
  `}
`;
