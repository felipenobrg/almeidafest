import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";

import { InfoCompany } from "./styles";
import { WhatsappLogo } from "phosphor-react";
import { Carousel } from "../Home/components/Carousel";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export function Home() {
  return (
    <>
      <Header />
      <SectionLinks />

      <Carousel />

      <InfoCompany>
        <h1>
          Há mais de 15 anos no mercado no ramo de locação em João Pessoa e
          Região!
        </h1>
        <p>
          Trabalhamos com locação de Tendas, Mesas e Cadeiras, Freezers,
          Toalhas.{" "}
        </p>
        <button>
          {" "}
          <WhatsappLogo size={28} color="#ffff" /> Faça seu orçamento
        </button>
      </InfoCompany>
      <WhatsAppButton />
    </>
  );
}
