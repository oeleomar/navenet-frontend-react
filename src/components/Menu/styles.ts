import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css``}
`;

export const Ul = styled.ul`
  ${({ theme }) => css`
    max-height: 90vh;
    overflow: auto;
  `}
`;
