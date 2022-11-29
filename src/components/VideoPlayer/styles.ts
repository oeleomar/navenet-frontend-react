import styled, { css } from "styled-components";

export const Video = styled.video`
  ${({ theme }) => css`
    width: 64rem;
    height: 36rem;
    display: block;
    margin: 0 auto;

    &:hover + div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const Source = styled.source`
  ${({ theme }) => css``}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 33.75vw;
    margin: 0 auto;
    color: ${theme.colors.darkWhite};
  `}
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    width: 64rem;
    margin: 0 auto;
    background-color: transparent;
    transform: translateY(-4rem);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const ButtonControl = styled.button`
  ${({ theme }) => css`
    width: 5rem;
    height: 4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.colors.darkWhite};
    z-index: -2;
  `}
`;

export const InputControl = styled.input`
  ${({ theme }) => css`
    width: 80%;
    background: #d3d3d3;
    outline: none;
    height: 20px;
    border-radius: 9px;
  `}
`;

export const SelectControl = styled.select`
  ${({ theme }) => css`
    width: 5rem;
    margin-left: 2rem;
    text-align: center;
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
  `}
`;

export const SelectOptionControl = styled.option`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlack};
  `}
`;
