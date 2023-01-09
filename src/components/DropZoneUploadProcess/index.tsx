import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { Error } from "@styled-icons/boxicons-regular/Error";
import "react-circular-progressbar/dist/styles.css";

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
  const [uploadError, setUploadError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(progress);

  const params = useParams();
  useEffect(() => {
    const upload = async () => {
      try {
        await uploadFile(file, params.setor || "", configHeaders, setProgress);
      } catch (err: any) {
        if (err.response.data.msg.msg)
          setErrorMessage(err.response.data.msg.msg);
        setUploadSuccess(false);
        setLoading(false);
        setUploadError(true);
      }
    };

    upload();
  }, []);

  useEffect(() => {
    if (progress < 100) {
      setLoading(true);
      return;
    }
    if (uploadError) return;
    setLoading(false);
    setUploadSuccess(true);
  }, [progress, uploadError]);

  const result = file.name.substring(file.name.length - 4).replace(/[\W]/g, "");
  return (
    <Styled.Wrapper error={uploadError}>
      {file.name.length > 30
        ? `${file.name.slice(0, 30)} ... .${result}`
        : file.name}{" "}
      {loading ? <CircularProgressbar value={progress} /> : null}
      {uploadSuccess ? <CheckCircleFill size={20} color="green" /> : null}
      {uploadError ? (
        <Styled.ContainerError>
          <Error size={20} color="red" />
          <Styled.SpanError>{errorMessage}</Styled.SpanError>
        </Styled.ContainerError>
      ) : null}
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
