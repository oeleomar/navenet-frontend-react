import * as Styled from "./styles";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { useCallback } from "react";

export type DropZoneProps = {
  setFiles: (curr: any) => any;
};

export type UploadFileProps = {
  file: File;
  errors: FileError[];
};

export const DropZone = ({ setFiles }: DropZoneProps) => {
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr: any) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { isDragActive, isDragReject, getRootProps, getInputProps } =
    useDropzone({ onDrop });
  return (
    <Styled.Wrapper
      {...getRootProps()}
      active={isDragActive}
      rejected={isDragReject}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Arraste os arquivos aqui.</p>
      ) : (
        <p>Clique ou arraste para adicionar arquivos</p>
      )}
    </Styled.Wrapper>
  );
};
