import styled, { css } from "styled-components";

type ActiveProps = {
  active?: boolean;
};

export const Li = styled.li<ActiveProps>`
  ${({ theme, active }) => css`
    width: 100%;
    list-style: none;
    padding: 0 4rem;
    transition: all 0.3s ease-in-out;
    background-color: ${active ? theme.colors.redTransparent : ""};
    > a {
      color: ${active ? theme.colors.white : theme.colors.black};
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 2rem 0;
      font-size: ${theme.font.sizes.small};
      text-align: start;
    }
  `}
`;
