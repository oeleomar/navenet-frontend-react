import styled, { css } from "styled-components";

type Error = {
  error: boolean;
};

export const Wrapper = styled.div<Error>`
  ${({ theme, error }) => css`
    padding: 0.7rem 1.5rem;
    margin: 1.5rem;
    font-size: ${theme.font.sizes.small};
    background-color: ${error
      ? theme.colors.redTransparent
      : theme.colors.darkWhite2};
  `}
`;
