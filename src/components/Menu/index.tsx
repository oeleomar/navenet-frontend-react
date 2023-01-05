import * as Styled from "./styles";
import { paths } from "../../utils/paths";
import { MenuLinks } from "../MenuLinks";

export type MenuProps = {
  href: string;
  pathName: string;
};

export const Menu = () => {
  const locate = window.location.pathname.includes("admin");

  return (
    <Styled.Nav>
      <Styled.Ul>
        {paths.map((path) => (
          <MenuLinks
            href={locate ? `/admin/setor/${path.slug}` : `/setor/${path.slug}`}
            pathName={path.pathName}
            key={`link__${path.pathName}`}
            slug={path.slug}
          />
        ))}
      </Styled.Ul>
    </Styled.Nav>
  );
};
