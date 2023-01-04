import styled, { css } from "styled-components";

type ActiveProps = {
  active?: boolean;
  process?: boolean;
};

export const Li = styled.li<ActiveProps>`
  ${({ theme, active }) => css`
    width: 100%;
    list-style: none;
    transition: all 0.3s ease-in-out;
    > a.principalMenu {
      color: ${active ? theme.colors.white : theme.colors.black};
      text-decoration: none;
      text-transform: capitalize;
      display: block;
      width: 100%;
      padding: 2rem 4rem;
      font-size: ${theme.font.sizes.small};
      text-align: start;
      transition: all 0.3s ease-in-out;
    }
  `}
`;

export const SubMenuContainer = styled.div<ActiveProps>`
  ${({ theme, active, process }) => css`
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: ${active ? "block" : "none"};

    > a.subMenu {
      text-decoration: none;
      display: block;
      width: 100%;
      padding: 2rem 6rem;
      font-size: ${theme.font.sizes.small};
    }

    > .selectorMenu {
      position: absolute;
      display: block;
      width: 100%;
      background-color: ${theme.colors.redTransparent};
      height: 6rem;
      top: ${process ? 0 : "50%"};
      z-index: -1;
    }

    a:first-child {
      color: ${process ? theme.colors.white : theme.colors.black};
    }

    a:nth-child(2) {
      color: ${!process ? theme.colors.white : theme.colors.black};
    }
  `}
`;
