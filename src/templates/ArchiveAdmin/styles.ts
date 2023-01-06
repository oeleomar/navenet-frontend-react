import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 4.5rem 10rem;

    > div {
      padding: 0;
    }
  `}
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem 1.5rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.darkWhite};
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-weight: 500;
    font-family: inherit;
    font-size: calc(${theme.font.sizes.small} - 0.2rem);
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      margin-right: 2px;
    }
  `}
`;

export const WrapperBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 6rem 0 10rem;
    margin-bottom: 10rem;
  `}
`;
