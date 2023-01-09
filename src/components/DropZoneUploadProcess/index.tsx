import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config";
import * as Styled from "./styles";

export type DropZoneUploadProcessProps = {
  file: File;
  error: any;
};

export const DropZoneUploadProcess = ({
  file,
  error,
}: DropZoneUploadProcessProps) => {
  const [progress, setProgress] = useState(0);

  const token = localStorage.getItem("token");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const params = useParams();
  useEffect(() => {
    const upload = async () => {
      try {
        await uploadFile(file, params.setor || "", configHeaders, setProgress);
      } catch (err) {
        console.log(err);
      }
    };

    upload();
  }, []);

  const result = file.name.substring(file.name.length - 4).replace(/[\W]/g, "");
  return (
    <Styled.Wrapper error={error.originalname === file.name ? true : false}>
      {file.name.length > 40
        ? `${file.name.slice(0, 40)} ... .${result}`
        : file.name}{" "}
      - {progress}
    </Styled.Wrapper>
  );
};

async function uploadFile(
  file: File,
  setor: string,
  configHeaders: object,
  setProgress: (a: number) => void,
) {
  const data = new FormData();
  data.append("file", file);
  data.append("visibilidade", "true");
  data.append("setores", setor);
  return axios.post(`${config.url}${config.slugArchive}${setor}`, data, {
    ...configHeaders,
    onUploadProgress: (event) => {
      if (!event || !event.total) return;
      let progress: number = Math.round((event.loaded / event.total) * 100);
      setProgress(progress);
    },
  });
}
