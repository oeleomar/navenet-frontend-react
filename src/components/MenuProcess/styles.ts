import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 1rem 10rem;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.darkWhite};

    > a {
      width: 100%;
      padding-left: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > div.container-tools {
      display: flex;
    }

    > div.container-tools button {
      border: none;
    }
  `}
`;
