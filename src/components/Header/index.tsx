import { useLocation } from "react-router-dom";
import { LogoImage } from "../LogoImage";
import { Menu } from "../Menu";
import { TopBarOptions } from "../TopBarOptions";
import * as Styled from "./styles";

export const Header = () => {
  const location = useLocation();
  const locate = location.pathname.split("/")[2];
  return (
    <>
      {locate !== "auth" ? (
        <Styled.Header>
          <TopBarOptions />
          <LogoImage />
          <Menu />
        </Styled.Header>
      ) : (
        ""
      )}
    </>
  );
};
