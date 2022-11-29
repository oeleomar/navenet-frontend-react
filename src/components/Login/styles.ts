import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkWhite};
    width: 30rem;
    padding: 5rem 1.5rem;
    text-align: center;
    border-radius: 1rem;
    z-index: 1;

    > div {
      padding: 0;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 2rem;
    text-align: start;
    margin-top: 4.5rem;
    transition: all 0.3s ease-in-out;

    > form div {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 2px solid ${theme.colors.black};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-top: 2rem;
    font-weight: 700;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkBlack};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkBlack};

    font-family: inherit;
    height: 5rem;
    width: 98%;
    outline: none;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: 3rem;
    border: none;
    height: 4.2rem;
    margin-top: 4.5rem;
    color: ${theme.colors.darkWhite};
    font-weight: 700;
    font-size: ${theme.font.sizes.medium};
    font-family: inherit;
    text-transform: uppercase;
    cursor: pointer;
  `}
`;

export const BackgroundLogoOne = styled.img`
  ${({ theme }) => css`
    position: absolute;
    height: 7rem;
    top: 100%;
    left: 25rem;
    transform: translateY(-100%);
    z-index: 0;
  `}
`;

export const BackgroundLogoTwo = styled.img`
  ${({ theme }) => css`
    position: absolute;
    height: 40rem;
    left: 0;
    top: 100%;
    transform: translateY(-100%);
    z-index: 0;
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    background-color: #f8d7da;
    color: #842029;
    padding: 1.6rem;
    width: 100%;
    display: block;
    text-align: center;
    border-radius: 5px;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
