import { DescriptionComponent } from "../../components/DescriptionComponent";
import { Header } from "../../components/Header";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import * as Styled from "./styles";

export type HomeProps = {
  title?: string;
};

export const Home = ({ title }: HomeProps) => {
  return (
    <>
      <Header />

      <Styled.Wrapper>
        <SectionComponent>
          <TitleComponent title="Home" />
          <DescriptionComponent description="Selecione um setor para mostrar os processos relacionados a ele." />
        </SectionComponent>
      </Styled.Wrapper>
    </>
  );
};
