import styled, { css } from "styled-components";

type DropZoneProps = {
  rejected: boolean;
};

export const Wrapper = styled.div<DropZoneProps>`
  ${({ theme, rejected }) => css`
    width: 100%;
    height: 10rem;
    border: 5px dashed
      ${rejected ? theme.colors.redTransparent : theme.colors.darkWhite2};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    color: ${rejected ? theme.colors.redPrimary : theme.colors.black};
    > p {
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.default};
      text-align: center;
      user-select: none;
    }
  `}
`;

export const FilesContainer = styled.div`
  ${({ theme }) => css``}
`;
