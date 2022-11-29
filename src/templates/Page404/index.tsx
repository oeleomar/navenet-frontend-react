import { Link } from "react-router-dom";
import { ContentSection } from "../../components/ContentSection";
import { SectionComponent } from "../../components/SectionComponent";
import * as Styled from "./styles";

export type Page404Props = {
  title?: string;
};

export const Page404 = ({ title }: Page404Props) => {
  return (
    <Styled.Wrapper>
      <SectionComponent>
        <ContentSection>
          <h1>Page Not Found, retorne para a HOME</h1>
          <Link to="/">HOME</Link>
        </ContentSection>
      </SectionComponent>
    </Styled.Wrapper>
  );
};
