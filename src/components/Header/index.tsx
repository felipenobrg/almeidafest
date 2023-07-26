import { NavLink } from "react-router-dom";
import LogoAlmeidaFest from "../../assets/LogoAlmeidaFest.png";
import { MenuDropdown } from "./components/MenuDropdown";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <MenuDropdown />
      <NavLink to={"/"}>
        <img src={LogoAlmeidaFest} alt="" />
      </NavLink>
    </HeaderContainer>
  );
}
