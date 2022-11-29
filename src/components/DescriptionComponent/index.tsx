import * as Styled from "./styles";

export type DescriptionComponentProps = {
  description: string;
};

export const DescriptionComponent = ({
  description,
}: DescriptionComponentProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  );
};
