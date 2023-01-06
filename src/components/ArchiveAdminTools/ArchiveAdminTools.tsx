import { useEffect, useState } from "react";
import * as Styled from "./styles";
import { TrashFill } from "@styled-icons/bootstrap/TrashFill";
import { PencilAlt } from "@styled-icons/heroicons-solid/PencilAlt";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { Close } from "@styled-icons/evil/Close";
import { AlertCircleOutline } from "styled-icons/evaicons-outline";
import { Eye } from "@styled-icons/fluentui-system-regular/Eye";
import { EyeOff } from "@styled-icons/fluentui-system-regular/EyeOff";
import axios from "axios";
import config from "../../config";

export type ArchiveAdminToolsProps = {
  data?: any;
};

export const ArchiveAdminTools = ({ data }: ArchiveAdminToolsProps) => {
  const [deleted, setDeleted] = useState(false);
  const [setores, setSetores] = useState<string[]>([]);
  const [visibilidade, setVisibilidade] = useState(true);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${config.url}${config.slugArchive}${data._id}`,
      );
      setDeleted(true);
    } catch (e) {
      setDeleted(false);
      alert("Algo saiu errado");
    }
  };

  const handleUpdate = () => {
    //
  };

  const handleAddSetores = (e: any) => {
    const setor = e.target.textContent
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "");

    setSetores((val) => {
      let data = [];
      if (val.includes(setor)) {
        val.splice(val.indexOf(setor), 1);
        data = val;
      } else {
        val.push(setor);
        data = val;
      }
      console.log(data);
      return [...data];
    });
  };

  useEffect(() => {
    if (deleted) {
      document.location.reload();
    }
  }, [deleted]);

  return (
    <Styled.Wrapper>
      <Dialog.Root>
        <Dialog.Trigger>
          <PencilAlt size={26} color="#3B3E99" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="AlertDialogOverlay" />
          <Dialog.Content className="AlertDialogContent">
            <Dialog.Title className="AlertDialogTitle dialogTitle">
              Edição do arquivo
            </Dialog.Title>
            <Dialog.Description className="AlertDialogDescription dialogDescription">
              Aqui você irá editar os setores e a visibilidade de seus arquivos.
            </Dialog.Description>
            <Styled.ContainerInput>
              <div>
                <Styled.Visibility
                  onClick={(e) => setVisibilidade(!visibilidade)}
                >
                  Visibilidade
                  <span>
                    {visibilidade ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </Styled.Visibility>

                <hr />
                <p onClick={handleAddSetores}>
                  Suporte
                  <span>
                    {setores && setores.includes("suporte") ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </span>
                </p>
                <p onClick={handleAddSetores}>
                  Suporte 2
                  <span>
                    {setores && setores.includes("suporte2") ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </span>
                </p>
                <p onClick={handleAddSetores}>
                  financeiro
                  <span>
                    {setores.includes("financeiro") ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </span>
                </p>
              </div>
              <span>* Clique para adicionar</span>
            </Styled.ContainerInput>
            <Dialog.Close asChild>
              <Styled.SaveChanges onClick={handleUpdate}>
                Salvar alterações
              </Styled.SaveChanges>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Styled.ButtonClose aria-label="close">
                <Close size={26} />
              </Styled.ButtonClose>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <TrashFill size={26} color="red" />
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">
              <AlertCircleOutline size={64} />
            </AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              Com essa ação você irá apagar o arquivo selecionado.
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
    </Styled.Wrapper>
  );
};
