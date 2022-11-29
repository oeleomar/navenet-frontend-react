import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import * as Styled from "./styles";

export type MenuLinksProps = {
  href: string;
  pathName: string;
  slug?: string;
};

export const MenuLinks = ({ href, pathName, slug = "" }: MenuLinksProps) => {
  const params = useParams();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (slug === params.setor) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [params, slug]);

  return (
    <Styled.Li active={active}>
      <Link to={href}>
        {"> "} {pathName}
      </Link>
    </Styled.Li>
  );
};
