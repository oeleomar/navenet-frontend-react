import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 6rem;
    width: 6rem;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.darkWhite};
    cursor: pointer;
  `}
`;
