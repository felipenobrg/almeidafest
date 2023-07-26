import { useState } from "react";
import LogoAlmeidaFest from "../../assets/LogoAlmeidaFest.png";
import {
  DropdownButton,
  DropdownList,
  DropdownMenu,
  HeaderContainer,
} from "./styles";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;
  return (
    <HeaderContainer>
    <div>
      {isSmallScreen ? (
        <DropdownButton open={isDropdownOpen} onClick={handleDropdownToggle}>
          <div className="icon" />
        </DropdownButton>
      ) : null}
      {isDropdownOpen && (
        <>
          <DropdownMenu open={isDropdownOpen}>
            <DropdownList>
              <a>Tendas</a>
              <a>Mesas e Cadeiras</a>
              <a>Freezers</a>
              <a>Toalhas</a>
            </DropdownList>
          </DropdownMenu>
        </>
      )}
      </div>
      <img src={LogoAlmeidaFest} alt="" />
    </HeaderContainer>
  );
}
