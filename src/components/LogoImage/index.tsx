import { Link, useLocation } from "react-router-dom";
import config from "../../config";
import * as Styled from "./styles";

export type LogoImageProps = {};

export const LogoImage = () => {
  const location = useLocation();
  const locate = location.pathname.split("/")[1];

  const handleClick = (e: any) => {
    const childs =
      e.target.parentElement.parentElement.nextSibling.childNodes[0].childNodes;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.remove("active");
    }
  };
  return (
    <Styled.Wrapper>
      <Link to={locate === "admin" ? "/admin" : "/"} onClick={handleClick}>
        {locate === "admin" ? (
          <>
            <Styled.Image
              admin
              src={`${config.url}${config.slugImages}logo.svg`}
              alt="Logo da empresa Navenet"
            />
            <Styled.Title>Admin</Styled.Title>
          </>
        ) : (
          <Styled.Image
            src={`${config.url}${config.slugImages}logo.svg`}
            alt="Logo da empresa Navenet"
          />
        )}
      </Link>
    </Styled.Wrapper>
  );
};
