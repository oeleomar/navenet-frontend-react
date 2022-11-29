import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    background-color: ${theme.colors.redPrimary};
    color: ${theme.colors.darkWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `}
`;
