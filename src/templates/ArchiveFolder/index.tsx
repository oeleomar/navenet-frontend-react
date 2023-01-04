import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import * as Styled from "./styles";
import config from "../../config";
import { ArchiveBox } from "../../components/ArchiveBox";
import { GoBackSetor } from "../../components/GoBackSetor";

export const ArchiveFolder = () => {
  const param = useParams();
  const [data, setData]: any = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(
          `${config.url}${config.slugArchive}${param.setor}/${param.id}`,
        );
        setData(data.data.data);
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
          <TitleComponent title="Impossível buscar dados..." />
        </SectionComponent>
      </>
    );
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <SectionComponent>
          <Link to={`/arquivos/setor/${param.setor}`}>
            <GoBackSetor />
          </Link>
          <TitleComponent title="Arquivos" />
          <Styled.WrapperBox>
            {data.arquivos.map((arquivo: any) => (
              <ArchiveBox {...arquivo} key={arquivo.filename} />
            ))}
          </Styled.WrapperBox>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
