import { WhatsappLogo } from "phosphor-react";
import { WhatsAppButtonContainer } from "./styles";

export function WhatsAppButton() {
  return (
    <WhatsAppButtonContainer>
    <WhatsappLogo
      size={45}
      weight="fill"
      color="#48C758"
    />
    </WhatsAppButtonContainer>
  );
}
