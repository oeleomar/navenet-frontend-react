import * as Styled from "./styles";
import { PencilAlt } from "@styled-icons/heroicons-solid/PencilAlt";

export type AdminEditToolProps = {
  title?: string;
};

export const AdminEditTool = ({ title }: AdminEditToolProps) => {
  return (
    <Styled.Wrapper>
      <PencilAlt size={36} />
    </Styled.Wrapper>
  );
};
