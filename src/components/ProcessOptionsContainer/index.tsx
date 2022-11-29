import * as Styled from "./styles";

export type ProcessOptionsContainerProps = {
  children: React.ReactNode;
};

export const ProcessOptionsContainer = ({
  children,
}: ProcessOptionsContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
