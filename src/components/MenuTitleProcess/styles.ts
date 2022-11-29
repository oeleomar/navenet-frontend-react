import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
    color: ${theme.colors.black};
  `}
`;
