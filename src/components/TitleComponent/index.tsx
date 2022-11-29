import * as Styled from "./styles";

export type TitleComponentProps = {
  title: string;
};

export const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Wrapper>
  );
};
