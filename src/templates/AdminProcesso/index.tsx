import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Processo } from "../Processo";
import * as Styled from "./styles";

export type AdminProcessoProps = {
  title?: string;
};

export const AdminProcesso = ({ title }: AdminProcessoProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/admin/auth");
  }, [navigate]);

  return (
    <>
      <Header />
      <Processo admin />
    </>
  );
};
