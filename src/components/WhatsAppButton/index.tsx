import { WhatsappLogo } from "phosphor-react";
import { WhatsAppButtonContainer } from "./styles";
import queryString from "query-string";

export function WhatsAppButton() {
  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583988888886",
      text: "Olá. Gostaria de fazer um orçamento",
    })}`;
    window.open(url, "_blank");
  }

  return (
    <WhatsAppButtonContainer onClick={handleWhatsAppClick}>
    <WhatsappLogo
      size={45}
      weight="fill"
      color="#48C758"
    />
    </WhatsAppButtonContainer>
  );
  }