import * as Styled from "./styles";
import { FileExcel2 } from "@styled-icons/remix-fill/FileExcel2";
import { Video } from "@styled-icons/entypo/Video";
import { FileDoc } from "@styled-icons/boxicons-solid/FileDoc";
import { DocumentPdf } from "@styled-icons/fluentui-system-regular/DocumentPdf";
import { FiletypeXml } from "@styled-icons/bootstrap/FiletypeXml";
import { FilePowerpoint } from "@styled-icons/fa-solid/FilePowerpoint";
import { CardImage } from "@styled-icons/bootstrap/CardImage";
import { Folder } from "@styled-icons/bootstrap/Folder";

export type ArchiveBoxProps = {
  originalname: string;
  filename: string;
};

export type FileTypesProps =
  | "excel"
  | "normal"
  | "video"
  | "doc"
  | "pdf"
  | "xml"
  | "powerpoint"
  | "imagem";

export const ArchiveBox = ({ originalname, filename }: ArchiveBoxProps) => {
  let fileType: FileTypesProps = "normal";
  const chaves: any = {
    doc: "doc",
    docx: "doc",
    xls: "excel",
    xlsx: "excel",
    mp4: "video",
    txt: "doc",
    pdf: "pdf",
    jpg: "imagem",
    png: "imagem",
    jpeg: "imagem",
    svg: "imagem",
    xml: "xml",
    ppt: "powerpoint",
    pptx: "powerpoint",
  };

  const indexOf = originalname.indexOf(".");
  console.log(indexOf);
  const result = originalname.slice(indexOf).replace(/[\W]/g, "");
  fileType = chaves[result] || "normal";

  return (
    <Styled.ContainerBox href={`/archives/${filename}`} download>
      <Styled.ContainerType fileType={fileType}>
        {fileIconReturn(fileType)}
      </Styled.ContainerType>
      <Styled.ContainerName>
        <Styled.ArchiveName>
          {originalname.length > 20
            ? `${originalname.slice(0, 20)} ...`
            : originalname}
        </Styled.ArchiveName>
      </Styled.ContainerName>
    </Styled.ContainerBox>
  );
};

function fileIconReturn(fileType: string): React.ReactNode {
  switch (fileType) {
    case "excel":
      return <FileExcel2 size={60} color="green" />;
    case "video":
      return <Video size={60} color="red" />;
    case "doc":
      return <FileDoc size={60} color="blue" />;
    case "pdf":
      return <DocumentPdf size={60} color="red" />;
    case "xml":
      return <FiletypeXml size={60} />;
    case "powerpoint":
      return <FilePowerpoint size={60} color="orange" />;
    case "imagem":
      return <CardImage size={60} color="turquoise" />;
    default:
      return <Folder size={60} />;
  }
}