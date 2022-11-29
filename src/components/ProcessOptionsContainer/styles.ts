import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${theme.colors.darkWhite};
    border-radius: 5px;
    margin-left: 1.5rem;
    min-height: 10rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25),
      -2px -2px 10px rgba(0, 0, 0, 0.25);
  `}
`;
