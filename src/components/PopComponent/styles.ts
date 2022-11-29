import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkWhite};
    box-shadow: ${theme.shadows.medium};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
  `}
`;

export const Iframe = styled.iframe`
  ${({ theme }) => css`
    width: 80vw;
    height: 100vh;
  `}
`;
