
import { NavLink } from "react-router-dom";
import { SectionLinksContainer } from "./styles";
import { useEffect, useState } from "react";

export function SectionLinks() {
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSection(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showSection) {
    return null;
  }
  
  return (
    <SectionLinksContainer>
        <NavLink to={"/"}>Início</NavLink>
        <NavLink to={"/tendas"}>Tendas</NavLink>
        <NavLink to={"/mesasecadeiras"}>Mesas e Cadeiras</NavLink>
        <NavLink to={"/freezers"}>Freezers</NavLink>
        <NavLink to={"/toalhas"}>Toalhas</NavLink>
    </SectionLinksContainer>
  );
}
