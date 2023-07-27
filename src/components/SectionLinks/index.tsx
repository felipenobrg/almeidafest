
import { NavLink } from "react-router-dom";
import { SectionLinksContainer } from "./styles";

export function SectionLinks() {
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
