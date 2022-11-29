import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    > svg {
      color: ${theme.colors.darkWhite};
    }
  `}
`;
