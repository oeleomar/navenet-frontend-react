import * as Styled from "./styles";

export type ContentSectionProps = {
  children: React.ReactNode;
};

export const ContentSection = ({ children }: ContentSectionProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
