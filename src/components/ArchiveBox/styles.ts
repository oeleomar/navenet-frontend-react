import styled, { css } from "styled-components";

interface FileTypeProps {
  fileType: string;
}

export const ContainerBox = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 15rem;
    border: 5px solid ${theme.colors.darkWhite2};
    box-shadow: 0px 2px 10px ${theme.colors.darkWhite2};
    position: relative;
    z-index: 0;
  `}
`;

export const ContainerType = styled.div<FileTypeProps>`
  ${({ theme, fileType }) => css`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: opacity(70%);
    transform: scale(1.2);

    svg {
      z-index: -10;
    }
  `}
`;

export const ContainerName = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40%;
    padding: 0.5rem 1.5rem;
    border-top: 2px solid ${theme.colors.darkWhite2};
    box-shadow: 0px 0.95627px 4.78135px ${theme.colors.darkWhite2};
  `}
`;

export const ArchiveName = styled.h3`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`;
