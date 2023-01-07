import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 65%;
    top: 2%;
    z-index: 1;

    > button {
      background: none;
      border: none;
      margin: 2px;
    }
  `}
`;

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 90%;
    top: 5%;
    cursor: pointer;
    background: none;
    border: none;
  `}
`;

export const ContainerInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: start;
    margin-bottom: 15px;

    > div {
      width: 60%;
      border: 1px solid black;
      padding: 5px;
      border-radius: 5px;
      overflow: auto;
      max-height: 20rem;
    }

    > div p {
      font-size: ${theme.font.sizes.xsmall};
      background: ${theme.colors.darkWhite2};
      border-radius: 5px;
      margin: 5px 0;
      padding: 5px 5px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > div p span {
      display: inline-block;
      text-align: end;
      pointer-events: none;
    }

    option:checked {
      //display: none;
    }

    > span {
      margin-top: 5px;
      font-size: 12px;
      text-align: start;
    }
  `}
`;

export const SaveChanges = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: none;
    display: block;
    margin-left: auto;
    border: 1px solid transparent;
    padding: 5px 15px;
    font-family: inherit;
    font-size: ${theme.font.sizes.small};
    color: rgb(24, 121, 78);
    background-color: rgb(204, 235, 215);
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    &:hover {
      border: 1px solid rgb(24, 121, 78);
    }
  `}
`;

export const Visibility = styled.p`
  ${({ theme }) => css`
    cursor: pointer;
    margin: 15px 0;
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
