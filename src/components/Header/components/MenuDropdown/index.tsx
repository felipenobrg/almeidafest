import { useState } from "react";
import { DropdownButton, DropdownList, DropdownMenu } from "./styles";
import { NavLink } from "react-router-dom";

export function MenuDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;

  return (
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
              <NavLink to={"/"}>Início</NavLink>
              <NavLink to={"/tendas"}>Tendas</NavLink>
              <NavLink to={"/mesasecadeiras"}>Mesas e Cadeiras</NavLink>
              <NavLink to={"/freezers"}>Freezers</NavLink>
              <NavLink to={"/toalhas"}>Toalhas</NavLink>
            </DropdownList>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}
