import * as Styled from "./styles";
import { paths } from "../../utils/paths";
import { MenuLinks } from "../MenuLinks";
import { useLocation } from "react-router-dom";

export type MenuProps = {
  href: string;
  pathName: string;
};

export const Menu = () => {
  const location = useLocation();
  const locate = location.pathname.split("/")[1];

  return (
    <Styled.Nav>
      <Styled.Ul>
        {paths.map((path) => (
          <MenuLinks
            href={
              locate === "admin"
                ? `/admin/setor/${path.slug}`
                : `/setor/${path.slug}`
            }
            pathName={path.pathName}
            key={`link__${path.pathName}`}
            slug={path.slug}
          />
        ))}
      </Styled.Ul>
    </Styled.Nav>
  );
};
