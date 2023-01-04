import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as Styled from "./styles";

export type MenuLinksProps = {
  href: string;
  pathName: string;
  slug?: string;
};

export const MenuLinks = ({ href, pathName, slug = "" }: MenuLinksProps) => {
  const params = useParams();
  const [active, setActive] = useState(false);
  const [process, setProcess] = useState(true);
  const path = window.location.pathname;

  useEffect(() => {
    slug === params.setor ? setActive(true) : setActive(false);
    path.includes("arquivos") ? setProcess(false) : setProcess(true);
  }, [params, slug, path]);

  return (
    <Styled.Li active={active}>
      <Link to={href} className="principalMenu">
        {"> "} {pathName}
      </Link>
      {active ? (
        <Styled.SubMenuContainer active={active} process={process}>
          <Link to={href} className="subMenu" onClick={() => setProcess(true)}>
            {"> "} Processos
          </Link>
          <Link
            to={`/arquivos${href}`}
            className="subMenu"
            onClick={() => setProcess(false)}
          >
            {"> "} Arquivos
          </Link>
          <span className="selectorMenu"></span>
        </Styled.SubMenuContainer>
      ) : (
        ""
      )}
    </Styled.Li>
  );
};
