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
    setFiles((curr: any) => [...curr, ...mappedAcc]);
  }, []);

  const { isDragActive, isDragReject, getRootProps, getInputProps } =
    useDropzone({ onDrop, maxFiles: 5, maxSize: 1024 * 100 });
  return (
    <Styled.Wrapper
      {...getRootProps()}
      active={isDragActive}
      rejected={isDragReject}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        isDragReject ? (
          <p>Limite máximo de 5</p>
        ) : (
          <p>Arraste os arquivos aqui.</p>
        )
      ) : (
        <p>
          Clique ou arraste para adicionar arquivos, limite de 5 arquivos
          selecionados.
        </p>
      )}
    </Styled.Wrapper>
  );
};
