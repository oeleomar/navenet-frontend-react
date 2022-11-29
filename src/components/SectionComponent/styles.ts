import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-left: 30rem;
    padding-top: 6rem;
    overflow-x: hidden;
  `}
`;
