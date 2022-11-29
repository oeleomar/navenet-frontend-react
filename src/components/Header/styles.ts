import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 30rem;
    height: 100vh;
    position: fixed;
    background-color: ${theme.colors.darkBlack};
  `}
`;
