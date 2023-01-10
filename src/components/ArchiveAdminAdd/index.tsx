import * as Styled from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Close } from "@styled-icons/evil/Close";
import { DropZone } from "../DropZone";
import React, { useEffect, useRef, useState } from "react";

export type ArchiveAdminAddProps = {
  title?: string;
};

export const ArchiveAdminAdd = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [close, setClose] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  useEffect(() => {
    if (close && !disabled) window.location.reload();
  }, [close, disabled]);
  return (
    <div ref={ref}>
      <Dialog.Portal>
        <Dialog.Overlay className="AlertDialogOverlay" />
        <Dialog.Content
          onPointerDownOutside={handleClose}
          className="AlertDialogContent"
          onCloseAutoFocus={() => {
            if (!disabled) handleClose();
          }}
          onInteractOutside={(e) => {
            if (disabled) e.preventDefault();
          }}
        >
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
            <DropZone setDisabled={setDisabled} />
          </Styled.Container>
          <Dialog.Close asChild onClick={handleClose}>
            <Styled.SaveChanges disabled={disabled}>
              Concluir
            </Styled.SaveChanges>
          </Dialog.Close>
          <Dialog.Close asChild onClick={handleClose}>
            <Styled.ButtonClose aria-label="close" disabled={disabled}>
              <Close size={26} color={disabled ? "#7B7B7B" : "#FE2E34"} />
            </Styled.ButtonClose>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  );
};
