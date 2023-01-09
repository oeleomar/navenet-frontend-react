import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";
import * as Dialog from "@radix-ui/react-dialog";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import config from "../../config";
import { DataSetor } from "../Setor";
import * as Styled from "./styles";
import { Header } from "../../components/Header";
import { ArchiveBox } from "../../components/ArchiveBox";
import { ArchiveAdminAdd } from "../../components/ArchiveAdminAdd";

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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Styled.ButtonAdd>
                  <Upload size={16} />
                  Novo Upload
                </Styled.ButtonAdd>
              </Dialog.Trigger>
              <Dialog.Portal>
                <ArchiveAdminAdd />
              </Dialog.Portal>
            </Dialog.Root>
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Styled.ButtonAdd>
                  <Upload size={16} />
                  Novo Upload
                </Styled.ButtonAdd>
              </Dialog.Trigger>
              <Dialog.Portal>
                <ArchiveAdminAdd />
              </Dialog.Portal>
            </Dialog.Root>
          </Styled.MainContainer>
          <Styled.WrapperBox>
            {data.map((val: any) => (
              <ArchiveBox {...val.arquivo} admin data={val} key={val._id} />
            ))}
          </Styled.WrapperBox>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
