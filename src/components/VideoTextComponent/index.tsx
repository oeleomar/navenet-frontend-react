import * as Styled from "./styles";

export type VideoTextComponentProps = {
  data: string;
};

export const VideoTextComponent = ({ data }: VideoTextComponentProps) => {
  return <Styled.Wrapper dangerouslySetInnerHTML={{ __html: data }} />;
};
