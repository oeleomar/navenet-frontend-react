import { useEffect } from "react";
import * as Styled from "./styles";

export type DropZoneUploadProcessProps = {
  file: File;
  progress: number;
};

export const DropZoneUploadProcess = ({
  file,
  progress,
}: DropZoneUploadProcessProps) => {
  return (
    <Styled.Wrapper>
      {file.name} - {progress}
    </Styled.Wrapper>
  );
};
