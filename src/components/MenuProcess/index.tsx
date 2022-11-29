import { Link, useParams } from "react-router-dom";
import { AdminDeleteTool } from "../AdminDeleteTool";
import { AdminEditTool } from "../AdminEditTool";
import { MenuDescriptionProcess } from "../MenuDescriptionProcess";
import { MenuTitleProcess } from "../MenuTitleProcess";
import { AlertCircleOutline } from "@styled-icons/evaicons-outline/AlertCircleOutline";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Styled from "./styles";
import axios from "axios";
import config from "../../config";
import { useEffect, useState } from "react";

export type MenuProcessProps = {
  title: string;
  admin?: boolean;
  setor: string;
  id: string;
};

export const MenuProcess = ({
  title,
  admin = false,
  setor,
  id,
}: MenuProcessProps) => {
  const [deleted, setDeleted] = useState(false);
  const params = useParams();

  const handleDelete = async (e: any) => {
    const token = localStorage.getItem("token");
    const configHeaders = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(config.url + config.slugProcess + id, configHeaders);
      setDeleted(true);
      alert("Processo apagado com sucesso");
    } catch (e) {
      alert("Internal server error, tente mais tarde");
    }
  };

  useEffect(() => {
    if (deleted) document.location.reload();
  }, [deleted]);

  if (admin) {
    return (
      <Styled.Wrapper>
        <Link to={`/admin/setor/${setor}/${id}`}>
          <MenuTitleProcess title={title} />
          <MenuDescriptionProcess />
        </Link>
        <div className="container-tools">
          <Link to={`/admin/setor/${params.setor}/${id}/edit`}>
            <AdminEditTool />
          </Link>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <AdminDeleteTool />
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="AlertDialogOverlay" />
              <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">
                  <AlertCircleOutline size={64} />
                </AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                  Com essa ação você irá apagar todo o processo e todos os
                  arquivos relacionados com ao mesmo.
                </AlertDialog.Description>
                <div
                  style={{
                    display: "flex",
                    gap: 25,
                    justifyContent: "center",
                  }}
                >
                  <AlertDialog.Action asChild onClick={handleDelete}>
                    <button className="Button red">Sim</button>
                  </AlertDialog.Action>
                  <AlertDialog.Cancel asChild>
                    <button className="Button mauve">Não</button>
                  </AlertDialog.Cancel>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </div>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Link to={`/setor/${setor}/${id}`}>
        <MenuTitleProcess title={title} />
        <MenuDescriptionProcess />
      </Link>
    </Styled.Wrapper>
  );
};
