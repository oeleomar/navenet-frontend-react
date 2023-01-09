import styled, { css } from "styled-components";

type Error = {
  error: boolean;
};

export const Wrapper = styled.div<Error>`
  ${({ theme, error }) => css`
    padding: 0.7rem 1.5rem;
    margin: 0.5rem;
    font-size: ${theme.font.sizes.small};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${error
      ? theme.colors.redTransparent
      : theme.colors.darkWhite2};

    & > svg {
      width: 2rem;
    }

    &:hover ${ContainerError} ${SpanError} {
      display: block;
      opacity: 1;
    }
  `}
`;

export const SpanError = styled.span`
  ${({ theme }) => css`
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-160%, -50%);
    width: 8rem;
    font-size: ${theme.font.sizes.xsmall};
    font-family: inherit;
    background: ${theme.colors.redTransparent};
    padding: 0.5rem 1rem;
    border-radius: 5px;
  `}
`;

export const ContainerError = styled.span`
  ${({ theme }) => css``}
`;
