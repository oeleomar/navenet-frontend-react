import { TrashFill } from "@styled-icons/bootstrap/TrashFill";
import * as Styled from "./styles";

export type AdminDeleteToolProps = {
  title?: string;
};

export const AdminDeleteTool = ({ title }: AdminDeleteToolProps) => {
  return (
    <Styled.Wrapper>
      <TrashFill size={32} />
    </Styled.Wrapper>
  );
};
