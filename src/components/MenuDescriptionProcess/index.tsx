import * as Styled from "./styles";

export type MenuDescriptionProcessProps = {
  data: string;
};

export const MenuDescriptionProcess = ({
  data,
}: MenuDescriptionProcessProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Paragraph>Última modificação em:</Styled.Paragraph>
      <Styled.Data>{data}</Styled.Data>
    </Styled.Wrapper>
  );
};
