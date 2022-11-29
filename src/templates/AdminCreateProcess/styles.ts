import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    padding: 4.5rem 10rem;
  `}
`;

export const MainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

    > a {
      margin-right: 1.5rem;
    }

    > div {
      padding: 0;
    }
  `}
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    width: 13rem;
    height: 6rem;
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

export const ContainerAdd = styled.div`
  ${({ theme }) => css`
    margin: 1.8rem 0;
    display: flex;
    width: 100%;
  `}
`;

export const ContainerDescription = styled.div`
  ${({ theme }) => css`
    padding: 1.4rem 2.3rem;
    background-color: ${theme.colors.darkWhite};
    box-shadow: ${theme.shadows.medium};
    border-radius: 1rem;
    width: 70%;
    max-height: 44rem;

    > label {
      display: block;
      margin-bottom: 0.6rem;
      font-weight: 500;
      font-size: calc(${theme.font.sizes.small} - 0.4rem);
      color: ${theme.colors.black};
    }

    > input {
      margin-bottom: 2rem;
      width: 100%;
      height: 3.7rem;
      border: 1px solid #cecece;
      border-radius: 10px;
      font-size: ${theme.font.sizes.small};
      font-family: inherit;
    }
  `}
`;

export const LabelRequired = styled.label`
  ${({ theme }) => css`
    &::after {
      content: "*";
      color: ${theme.colors.redPrimary};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    padding-left: 1rem;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css``}
`;

export const Editor = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;

export const ContainerOptions = styled.div`
  ${({ theme }) => css`
    width: 27%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  `}
`;

export const OptionTitle = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} - 0.3rem);
    font-weight: 700;
    margin-bottom: 1.7rem;
  `}
`;

export const OptionLabel = styled.label`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.black};
  `}
`;

export const OptionInputRadio = styled.input`
  ${({ theme }) => css`
    margin: 0.6rem;
    margin-left: 0;
  `}
`;

export const InputArchive = styled.input`
  ${({ theme }) => css`
    display: none;
  `}
`;

export const LabelFile = styled.label`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    width: 15rem;
    height: 3.8rem;
    background: ${theme.colors.black};
    color: ${theme.colors.darkWhite};
    border-radius: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-bottom: 0.6rem;

    > svg {
      margin-right: 0.8rem;
    }
  `}
`;

export const InputOptions = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    font-family: inherit;
    border-radius: 1rem;
    border: 1px solid #cecece;
    padding-left: 1rem;
  `}
`;
