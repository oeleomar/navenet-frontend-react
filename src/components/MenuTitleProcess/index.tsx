import * as Styled from "./styles";

export type MenuTitleProcessProps = {
  title: string;
};

export const MenuTitleProcess = ({ title }: MenuTitleProcessProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};
