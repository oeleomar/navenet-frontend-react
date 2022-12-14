import { Link } from "react-router-dom";
import config from "../../config";
import * as Styled from "./styles";

export type LogoImageProps = {};

export const LogoImage = () => {
  const locate = window.location.pathname.includes("admin");

  const handleClick = (e: any) => {
    const childs =
      e.target.parentElement.parentElement.nextSibling.childNodes[0].childNodes;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.remove("active");
    }
  };
  return (
    <Styled.Wrapper>
      <Link to={locate ? "/admin" : "/"} onClick={handleClick}>
        {locate ? (
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
