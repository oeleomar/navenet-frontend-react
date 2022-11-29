import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 5rem auto;

    h1 {
      font-size: ${theme.font.sizes.huge};
      margin: 3rem 0;
    }

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
      margin: 2rem 0;
    }

    h3,
    h4 {
      font-size: ${theme.font.sizes.large};
      margin: 1rem 0;
    }

    p,
    ul,
    li,
    a,
    span {
      font-size: ${theme.font.sizes.medium};
      margin: 0.3rem;
    }

    ul,
    ol {
      margin-left: 5rem;
    }
  `}
`;
