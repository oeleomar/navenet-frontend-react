import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border: 5px dashed ${theme.colors.darkWhite2};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.black};
    s > p {
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.default};
      text-align: center;
      user-select: none;
    }
  `}
`;
