import * as Styled from "./styles";

export type SectionComponentProps = {
  children: React.ReactNode;
};

export const SectionComponent = ({ children }: SectionComponentProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
