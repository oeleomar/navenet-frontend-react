import { useEffect } from "react";
import * as Styled from "./styles";

export type DropZoneUploadProcessProps = {
  file: File;
  error: any;
};

export const DropZoneUploadProcess = ({
  file,
  error,
}: DropZoneUploadProcessProps) => {
  const result = file.name.substring(file.name.length - 4).replace(/[\W]/g, "");
  return (
    <Styled.Wrapper error={error.originalname === file.name ? true : false}>
      {file.name.length > 40
        ? `${file.name.slice(0, 40)} ... .${result}`
        : file.name}
    </Styled.Wrapper>
  );
};
