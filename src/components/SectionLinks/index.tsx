import { NavLink } from "react-router-dom";
import { SectionLinksContainer } from "./styles";

export function SectionLinks() {
  return (
    <SectionLinksContainer>
        <NavLink>Tendas</NavLink>
        <NavLink>Mesas e Cadeiras</NavLink>
        <NavLink>Freezers</NavLink>
        <NavLink>Toalhas</NavLink>
    </SectionLinksContainer>
  );
}
