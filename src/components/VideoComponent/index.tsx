import { VideoPlayer } from "../VideoPlayer";
import { VideoTextComponent } from "../VideoTextComponent";
import * as Styled from "./styles";

export type ProcessProps = {
  _id: string;
  ativo: boolean;
  descricao: Array<{}>;
  documento: string;
  documentosAntigos: Array<{}>;
  setor: string;
  tipo: string;
  titulo: string;
  video: string;
};

export const VideoComponent = ({
  _id,
  ativo,
  descricao,
  video,
  ...rest
}: ProcessProps) => {
  console.log(video);
  return (
    <Styled.Wrapper>
      <VideoPlayer video={video} key={_id} />
      {descricao.length > 0
        ? descricao.map((val: any) => (
            <VideoTextComponent data={val} key={Math.random() * 1000} />
          ))
        : ""}
    </Styled.Wrapper>
  );
};
