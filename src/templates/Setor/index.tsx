import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { MenuProcess } from "../../components/MenuProcess";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import * as Styled from "./styles";

export interface DataSetor {
  ativo: boolean;
  titulo: string;
  setor: string;
  id: string;
}

export const Setor = () => {
  const param = useParams();
  const [data, setData] = useState<DataSetor[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios(config.url + config.slugProcess + param.setor);
        setData(data.data.data);
      } catch (e) {
        //
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
          <TitleComponent title="Processos" />
          {data.map((val) => {
            if (!val.ativo) return "";
            return <MenuProcess title={val.titulo} key={val.id} {...val} />;
          })}
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
