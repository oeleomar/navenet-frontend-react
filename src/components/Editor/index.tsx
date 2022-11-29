import JoditEditor from "jodit-react";
import { useRef } from "react";

export type EditorProps = {
  content?: string;
  setContent: any;
  config: object;
};

export const Editor = ({ content = "", setContent, config }: EditorProps) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={{ ...config }}
      onBlur={(newContent: string) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
    />
  );
};
