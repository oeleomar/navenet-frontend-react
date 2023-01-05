import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Styled from "./styles";

import { Upload } from "@styled-icons/bootstrap/Upload";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import { GoBackSetor } from "../../components/GoBackSetor";
import { ProcessOptionsContainer } from "../../components/ProcessOptionsContainer";
import axios from "axios";
import config from "../../config/index";
import { config as editorConfig } from "../../config/editor";
import { Header } from "../../components/Header";
import { DropZone } from "../../components/DropZone";
import { DropZoneUploadProcess } from "../../components/DropZoneUploadProcess";

export interface ArchiveAdminNewProps {
  archive?: boolean;
}

export const ArchiveAdminNew = ({ archive = false }: ArchiveAdminNewProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [files, setFiles]: any = useState([]);
  const [checked, setChecked] = useState(true);
  const [token, setToken] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/admin/auth");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const onProgress = (event) => {
      const { loaded, total } = event;
      let percent = Math.floor((loaded * 100) / total);
      if (percent <= 100) {
        setProgress(percent);
      }
    };

    if (titulo === "") return alert("Titulo não pode ser vazio");
    if (files.length === 0) return alert("Envie algum arquivo");

    const setores = [];
    setores.push(params.setor);

    const responses = files.map(async (file) => {
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("visibilidade", checked);
      formData.append("setores", setores);
      formData.append("file", file.file);

      try {
        setLoading(true);
        const response = await axios.post(
          `${config.url}${config.slugArchive}create/${params.setor}`,
          formData,
          { ...configHeaders, onUploadProgress: onProgress },
        );
        return response;
      } catch (e) {
        setLoading(false);
        if (e.response.data.msg === "Token inválido") {
          setToken(true);
        }
        alert(`Algo saiu errado: ${e.response.data.msg.msg}`);
      }
    });
  };

  useEffect(() => {
    if (token) {
      alert("Token inválido, faça o login novamente");
      navigate("/admin/auth");
    }
  }, [token, navigate]);

  return (
    <>
      <Header />
      <Styled.Wrapper
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        action="#"
      >
        <SectionComponent>
          <Styled.MainContainer>
            <Link to={`/arquivos/admin/setor/${params.setor}`}>
              <GoBackSetor />
            </Link>
            <TitleComponent title="Nova Pasta" />
            <Styled.ButtonAdd type="submit" disabled={loading ? true : false}>
              <Upload size={16} />
              Enviar
            </Styled.ButtonAdd>
          </Styled.MainContainer>
          <Styled.ContainerAdd>
            <Styled.ContainerDescription>
              <Styled.LabelRequired>Título</Styled.LabelRequired>
              <Styled.Input
                type="text"
                name="titulo"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              {files.map(({ file }) => (
                <DropZoneUploadProcess file={file} progress={progress} />
              ))}
            </Styled.ContainerDescription>

            <Styled.ContainerOptions>
              <ProcessOptionsContainer>
                <Styled.OptionTitle>Visibilidade</Styled.OptionTitle>
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    id="visible"
                    defaultChecked
                    onClick={() => setChecked(true)}
                  />
                  <Styled.OptionLabel htmlFor="visible">
                    Visivel
                  </Styled.OptionLabel>
                </div>
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    value="Oculto"
                    id="ocult"
                    onClick={() => setChecked(false)}
                  />
                  <Styled.OptionLabel htmlFor="ocult">
                    Oculto
                  </Styled.OptionLabel>
                </div>
              </ProcessOptionsContainer>

              {/* <ProcessOptionsContainer>
                <Styled.OptionTitle>Setores</Styled.OptionTitle>
                <Styled.LabelFile htmlFor="archiveVideo">
                  <Upload size={15} />
                  {video ? "Anexado" : "Enviar Vídeo"}
                </Styled.LabelFile>
                <Styled.InputArchive
                  type="file"
                  id="archiveVideo"
                  name="video"
                  onChange={(e) => {
                    if (e.target.files.length > 0) setVideo(e.target.files[0]);
                  }}
                />
              </ProcessOptionsContainer> */}

              <ProcessOptionsContainer>
                <DropZone setFiles={setFiles} />
              </ProcessOptionsContainer>
            </Styled.ContainerOptions>
          </Styled.ContainerAdd>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
