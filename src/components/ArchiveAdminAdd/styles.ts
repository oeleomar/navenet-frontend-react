import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 20rem;
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
