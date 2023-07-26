import { useState } from "react";
import { DropdownButton, DropdownList, DropdownMenu } from "./styles";

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
              <a>Tendas</a>
              <a>Mesas e Cadeiras</a>
              <a>Freezers</a>
              <a>Toalhas</a>
            </DropdownList>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}
