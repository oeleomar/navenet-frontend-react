import config from "../../config";
import * as Styled from "./styles";

export type PopComponentProps = {
  documento?: string;
  titulo: string;
};

export const PopComponent = ({
  titulo,
  documento = "",
  ...rest
}: PopComponentProps) => {
  if (!documento) {
    return (
      <Styled.Wrapper>
        <h1>Nenhum documento assiciado</h1>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Styled.Iframe
        src={`${config.url}${config.slugPop}${documento}`}
        title={`Processo referente a ${titulo}`}
      />
    </Styled.Wrapper>
  );
};
