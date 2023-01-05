import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";
import { MenuProcess } from "../../components/MenuProcess";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import { DataSetor } from "../Setor";
import * as Styled from "./styles";
import { Header } from "../../components/Header";

export type AdminSetorProps = {
  title?: string;
};

export const ArchiveAdmin = ({ title }: AdminSetorProps) => {
  const param = useParams();
  const [data, setData] = useState<DataSetor[] | null>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/admin/auth");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(config.url + config.slugArchive + param.setor);
        setData(data.data.data);
        console.log(data.data.data);
      } catch (e) {
        alert("Impossível buscar dados");
        setData(null);
      }
    };
    fetchData();
  }, [param]);

  if (!data) {
    return (
      <>
        <Header />
        <SectionComponent>
          <TitleComponent title="Carregando..." />
        </SectionComponent>
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <Header />
        <SectionComponent>
          <Styled.MainContainer>
            <TitleComponent title="Arquivos" />
            <Link to={`/arquivos/admin/setor/${param.setor}/new`}>
              <Styled.ButtonAdd>
                <Upload size={16} />
                NOVO UPLOAD
              </Styled.ButtonAdd>
            </Link>
          </Styled.MainContainer>
        </SectionComponent>
      </>
    );
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <SectionComponent>
          <Styled.MainContainer>
            <TitleComponent title="Arquivos" />
            <Link to={`/arquivos/admin/setor/${param.setor}/new`}>
              <Styled.ButtonAdd>
                <Upload size={16} />
                NOVO UPLOAD
              </Styled.ButtonAdd>
            </Link>
          </Styled.MainContainer>
          {data.map((val: any) => {
            if (!val.visibilidade) return "";
            return (
              <MenuProcess
                key={val.titulo}
                {...val}
                archive={true}
                admin
                folder
              />
            );
          })}
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
