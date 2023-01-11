import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { Error as ErrorIcon } from "@styled-icons/boxicons-regular/Error";
import "react-circular-progressbar/dist/styles.css";

import config from "../../config";
import * as Styled from "./styles";

export type DropZoneUploadProcessProps = {
  file: File;
  error: any;
  setDisabled: (a: boolean) => void;
};

export const DropZoneUploadProcess = ({
  file,
  error,
  setDisabled,
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

  const params = useParams();
  useEffect(() => {
    const upload = async () => {
      try {
        if (error.length > 0) {
          throw new Error(error[0].message);
        }
        await uploadFile(file, params.setor || "", configHeaders, setProgress);
      } catch (err: any) {
        setUploadError(true);
        setUploadSuccess(false);
        setLoading(false);
        setDisabled(false);
        if (err?.response?.data?.msg?.msg)
          setErrorMessage(err.response.data.msg.msg);
        if (err?.message) setErrorMessage(err.message);
      }
    };
    upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(!uploadError);
    if (progress < 100 && uploadError === false) {
      setLoading(true);
      setDisabled(true);
      return;
    }

    setLoading(false);
    setDisabled(false);
    if (!uploadError) setUploadSuccess(true);
  }, [progress, uploadError, setDisabled]);

  const result = file.name.substring(file.name.length - 4).replace(/[\W]/g, "");
  return (
    <Styled.Wrapper error={uploadError}>
      {file.name.length > 30
        ? `${file.name.slice(0, 30)} ... .${result}`
        : file.name}{" "}
      {loading && error.length === 0 ? (
        <CircularProgressbar value={progress} />
      ) : null}
      {uploadSuccess ? <CheckCircleFill size={20} color="green" /> : null}
      {uploadError ? (
        <Styled.ContainerError>
          <ErrorIcon size={20} color="red" />
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
