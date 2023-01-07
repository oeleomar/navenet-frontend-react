import { LogoImage } from "../LogoImage";
import { Menu } from "../Menu";
import { TopBarOptions } from "../TopBarOptions";
import * as Styled from "./styles";

export const Header = () => {
  const locate = window.location.pathname.includes("auth");
  return (
    <>
      {!locate ? (
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
