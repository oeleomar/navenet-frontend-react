import { Link, useNavigate, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";

import * as Styled from "./styles";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import { GoBackSetor } from "../../components/GoBackSetor";
import React, { useEffect, useState } from "react";
import { Editor } from "../../components/Editor";
import { ProcessOptionsContainer } from "../../components/ProcessOptionsContainer";
import axios from "axios";
import configUrl from "../../config/index";
import { config as editorConfig } from "../../config/editor";
import { Header } from "../../components/Header";

export const AdminCreateProcess = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState();
  const [documento, setDocumento] = useState();
  const [content, setContent] = useState("");
  const [titulo, setTitulo] = useState("");
  const [checked, setChecked] = useState(true);
  const [author, setAuthor] = useState("");
  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/admin/auth");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (titulo.length === 0 || author.length === 0)
      return alert("Título ou autor não podem ser vazios");

    const token = localStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const data = {
      titulo: formData.get("titulo"),
      author: formData.get("author"),
      video: formData.get("video"),
      file: formData.get("file"),
      tipo: "processo",
      setor: params.setor,
      ativo: checked,
      descricao: content,
    };

    try {
      const result = await axios.post(
        `${configUrl.url}${configUrl.slugProcess}`,
        data,
        configHeaders,
      );
      console.log(result);
      alert("Processo criado com sucesso");
    } catch (e) {
      if (e.response.data.msg === "Token inválido") {
        setToken(true);
      }
      console.log(e);
      alert(`Algo saiu errado: ${e.response.data.msg}`);
    }
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
            <Link to={`/admin/setor/${params.setor}`}>
              <GoBackSetor />
            </Link>
            <TitleComponent title="Novo Upload" />
            <Styled.ButtonAdd type="submit">
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
              <Styled.Label>Conteúdo</Styled.Label>
              <Styled.Editor>
                <Editor
                  content={content}
                  setContent={setContent}
                  config={editorConfig}
                />
              </Styled.Editor>
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

              <ProcessOptionsContainer>
                <Styled.OptionTitle>Vídeo</Styled.OptionTitle>
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
              </ProcessOptionsContainer>
              <ProcessOptionsContainer>
                <Styled.OptionTitle>Documento</Styled.OptionTitle>
                <Styled.LabelFile htmlFor="archiveDocument">
                  <Upload size={15} />
                  {documento ? "Anexado" : "Enviar Documento"}
                </Styled.LabelFile>
                <Styled.InputArchive
                  type="file"
                  id="archiveDocument"
                  name="file"
                  onChange={(e) => {
                    if (e.target.files.length > 0)
                      setDocumento(e.target.files[0]);
                  }}
                />
              </ProcessOptionsContainer>
              <ProcessOptionsContainer>
                <Styled.OptionTitle>Author</Styled.OptionTitle>
                <Styled.InputOptions
                  name="author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </ProcessOptionsContainer>
            </Styled.ContainerOptions>
          </Styled.ContainerAdd>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
