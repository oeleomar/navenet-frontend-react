import * as Styled from "./styles";
import { MenuLinks } from "../MenuLinks";
import { useContext } from "react";
import { SetoresContext } from "../../contexts/SetoresContext";

export type PathProps = {
  slug: string;
  pathName: string;
};

export const Menu = () => {
  const locate = window.location.pathname.includes("admin");
  const paths: PathProps[] = useContext(SetoresContext);

  return (
    <Styled.Nav>
      <Styled.Ul>
        {paths.length > 0
          ? paths.map((path: PathProps) => {
              if (!path.slug || !path.pathName) return "";
              return (
                <MenuLinks
                  href={
                    locate ? `/admin/setor/${path.slug}` : `/setor/${path.slug}`
                  }
                  pathName={path.slug}
                  key={`link__${path.pathName}`}
                  slug={path.slug}
                />
              );
            })
          : null}
      </Styled.Ul>
    </Styled.Nav>
  );
};
