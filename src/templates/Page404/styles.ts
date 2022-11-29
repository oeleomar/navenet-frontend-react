import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes.large};
      margin-bottom: 2rem;
    }

    a {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.primary};
    }
  `}
`;
