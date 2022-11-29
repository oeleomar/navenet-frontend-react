import styled, { css } from "styled-components";

interface SpanCovered {
  covered: boolean;
}

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const H1error = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};

    > a {
      display: block;
      margin-top: 5rem;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const MenuOptions = styled.div`
  ${({ theme }) => css`
    padding: 4rem 16rem;
    display: flex;
    width: 106rem;
    margin: 0 auto;
    z-index: -1;

    > a {
      display: block;
      position: fixed;
      width: 3.3rem;
      height: 3.3rem;

      left: 25%;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 15rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  `}
`;

export const Video = styled.span<SpanCovered>`
  ${({ theme, covered }) => css`
    color: ${covered ? theme.colors.darkWhite : theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    margin-left: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  `}
`;

export const Pop = styled.span<SpanCovered>`
  ${({ theme, covered }) => css`
    margin-right: 20px;
    color: ${covered ? theme.colors.darkWhite : theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    opacity: 0;
    width: 0;
    height: 0;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.primary};
    z-index: -2;
    border-radius: 2rem;

    &::before {
      position: absolute;
      content: "";
      height: 4.1rem;
      width: 8rem;
      left: -1px;
      bottom: 0px;
      background-color: ${theme.colors.darkWhite};
      transition: all 0.3s ease-in-out;
      border-radius: 2rem;
      box-shadow: ${theme.shadows.small};
    }

    input:checked + &:before {
      transform: translateX(7.5rem);
    }
  `}
`;
