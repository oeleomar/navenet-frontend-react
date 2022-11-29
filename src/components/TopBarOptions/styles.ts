import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    background-color: ${theme.colors.darkWhite2};
    box-shadow: ${theme.shadows.small};
    height: 6rem;
    position: fixed;
    z-index: -1;
  `}
`;
