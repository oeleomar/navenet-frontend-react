import * as Styled from "./styles";

export type MenuDescriptionProcessProps = {
  title?: string;
};

export const MenuDescriptionProcess = ({
  title,
}: MenuDescriptionProcessProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Paragraph>Última modificação em:</Styled.Paragraph>
      <Styled.Data>xx/xx/xxxx</Styled.Data>
    </Styled.Wrapper>
  );
};
