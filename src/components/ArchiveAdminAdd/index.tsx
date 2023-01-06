import * as Styled from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Close } from "@styled-icons/evil/Close";
import { DropZone } from "../DropZone";
import { useState } from "react";

export type ArchiveAdminAddProps = {
  title?: string;
};

export const ArchiveAdminAdd = ({ title }: ArchiveAdminAddProps) => {
  const [files, setFiles] = useState([]);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="AlertDialogOverlay" />
      <Dialog.Content className="AlertDialogContent">
        <Dialog.Title className="AlertDialogTitle dialogTitle">
          Adicionar novo arquivo
        </Dialog.Title>
        <Dialog.Description className="AlertDialogDescription dialogDescription">
          <span>* Todos arquivos serão visiveis</span>
          <span>
            * Para alterar setor e visibilidade somente editar o arquivo
          </span>
        </Dialog.Description>
        <Styled.Container>
          <DropZone setFiles={setFiles} />
        </Styled.Container>
        <Dialog.Close asChild>
          <Styled.SaveChanges>Concluir</Styled.SaveChanges>
        </Dialog.Close>
        <Dialog.Close asChild>
          <Styled.ButtonClose aria-label="close">
            <Close size={26} />
          </Styled.ButtonClose>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
