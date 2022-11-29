import { useLocation } from "react-router-dom";
import { Login } from "../../components/Login";
import * as Styled from "./styles";

export type LoginTemplateProps = {
  title?: string;
};

export const LoginTemplate = ({ title }: LoginTemplateProps) => {
  const location = useLocation();
  const locate = location.pathname.split("/")[1];
  return (
    <Styled.Wrapper>
      {locate === "admin" ? <Login admin /> : <Login admin={false} />}
    </Styled.Wrapper>
  );
};
