import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const WrapperBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 6rem 0 10rem;
    margin-bottom: 10rem;
  `}
`;
