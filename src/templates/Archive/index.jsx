import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArchiveBox } from "../../components/ArchiveBox";
import { Header } from "../../components/Header";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import * as Styled from "./styles";

export interface SingleArchiveProps {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: string;
}

export interface ArquivosProps {
  setores: string[];
  titulo: string;
  arquivos: SingleArchiveProps[];
  visibilidade: boolean;
}

export const Archive = () => {
  const param = useParams();
  const [data, setData]: ArquivosProps[] | null = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(config.url + config.slugArchive + param.setor);
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

  if (data.length === 0) {
    return (
      <>
        <Header />
        <SectionComponent>
          <TitleComponent title="Nenhum dado cadastrado" />
        </SectionComponent>
      </>
    );
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <SectionComponent>
          <TitleComponent title="Arquivos" />
          <Styled.WrapperBox>
            {data.map((val: any) =>
              val.visibilidade ? (
                <ArchiveBox {...val.arquivo} data={val} key={val._id} />
              ) : null,
            )}
          </Styled.WrapperBox>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
