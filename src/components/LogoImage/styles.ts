import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.redPrimary};
    box-shadow: ${theme.shadows.small};

    > a {
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

interface ImageAdmin {
  admin?: boolean;
}

export const Image = styled.img<ImageAdmin>`
  ${({ theme, admin }) => css`
    width: ${admin ? "13rem" : "18rem"};
    display: ${admin ? "inline-block" : "block"};
    margin: ${admin ? "none" : "0 auto"};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.large};
    font-weight: 700;
    color: ${theme.colors.white};
    text-transform: uppercase;
    transform: translateY(-10%);

    &::before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 4.5rem;
      margin-right: 1rem;
      transform: translateY(20%);
      background-color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
