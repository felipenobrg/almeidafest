import LogoAlmeidaFest from "../../assets/LogoAlmeidaFest.png";
import { MenuDropdown } from "./components/MenuDropdown";
import {
  HeaderContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
       <MenuDropdown />
      <img src={LogoAlmeidaFest} alt="" />
    </HeaderContainer>
  );
}
