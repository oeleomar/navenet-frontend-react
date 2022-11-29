import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentSection } from "../../components/ContentSection";
import { GoBackSetor } from "../../components/GoBackSetor";
import { Header } from "../../components/Header";
import { PopComponent } from "../../components/PopComponent";
import { SectionComponent } from "../../components/SectionComponent";
import { ProcessProps, VideoComponent } from "../../components/VideoComponent";
import config from "../../config";
import * as Styled from "./styles";

type ProcessoProps = {
  admin?: boolean;
};

export const Processo = ({ admin = false }) => {
  const [covered, setCovered] = useState(false);
  const [state, setState] = useState("video");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const params = useParams();
  const { setor, id } = params;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const raw = (
          await axios(`${config.url}${config.slugProcess}${setor}/${id}`)
        ).data;
        setData(raw);
      };
      fetchData();
    } catch (e) {
      setError("Um erro ocorreu, tente novamente mais tarde.");
    }
  }, [setor, id]);

  useEffect(() => {
    if (!covered) {
      setState("video");
    } else {
      setState("pop");
    }
  }, [covered]);

  if (!data) {
    return (
      <>
        <Header />
        <SectionComponent>
          <ContentSection>
            <Styled.H1error>
              Processo não encontrado. Um erro ocorreu, entre em contato com o
              Administrador
              <Link to="/">Retornar para HOME</Link>
            </Styled.H1error>
          </ContentSection>
        </SectionComponent>
      </>
    );
  }

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <SectionComponent>
          <Styled.MenuOptions>
            {admin ? (
              <Link to={`/admin/setor/${setor}`}>
                <GoBackSetor />
              </Link>
            ) : (
              <Link to={`/setor/${setor}`}>
                <GoBackSetor />
              </Link>
            )}
            <Styled.Label>
              <Styled.Video className="video" covered={covered}>
                Tutorial
              </Styled.Video>
              <Styled.Input
                type="checkbox"
                onChange={(e) => setCovered(!covered)}
              />
              <Styled.Span />
              <Styled.Pop covered={!covered}>DOC</Styled.Pop>
            </Styled.Label>
          </Styled.MenuOptions>
          <ContentSection>
            {state === "video" ? (
              <VideoComponent {...(data as ProcessProps)} />
            ) : (
              <PopComponent {...(data as ProcessProps)} />
            )}
          </ContentSection>
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
