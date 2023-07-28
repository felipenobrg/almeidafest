import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";

import { InfoCompany, SocialMediaContainer } from "./styles";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Carousel } from "../Home/components/Carousel";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <SectionLinks />

      <Carousel />
      <InfoCompany>
        <h1>Quem somos?</h1>
        <p>
          A empresa{" "}
          <strong>
            Almeida Fest é a pioneira no mercado de aluguel de mesas e cadeiras,
            tendas, toalhas e freezers em João Pessoa e região
          </strong>
          . Sua trajetória teve início em 2003, e ao longo de mais de 20 anos,
          nos dedicamos a promover o melhor serviço na área.
        </p>
        <h1>
          Por que escolher a <strong>Almeida Fest?</strong>
        </h1>
        <p>
          Com uma ampla gama de produtos disponíveis para os mais diversos tipos
          de eventos, nossa experiência consolidada nos torna a escolha ideal
          para quem busca <strong>qualidade e confiabilidade</strong> na locação
          de itens essenciais para festas e comemorações. 
        </p>
        <h1>
          Há mais de 20 anos no mercado de locação em João Pessoa e Região!
        </h1>
        <p>
          Ao longo dos anos, solidificamos nossa presença no mercado de aluguel
          em João Pessoa e região, sendo reconhecidos como uma empresa de 
          {" "}<strong>confiança e excelência</strong> em serviços de locação.
          Trabalhamos com aluguel de tendas, mesas, cadeiras, freezers e
          toalhas, garantindo que o seu evento seja um verdadeiro sucesso.
        </p>
        <SocialMediaContainer>
          <h1>Redes Sociais</h1>
          <a href="https://www.instagram.com/almeidafest/">
            <InstagramLogo color="#7C7C8A" size={35} alt="Nós siga no instagram" />
          </a>
          <a href="https://www.facebook.com/flavionobregadealmeida.almeida?mibextid=LQQJ4d">
            <FacebookLogo color="#7C7C8A" size={35} alt="Nós siga no facebook" />
          </a>
        </SocialMediaContainer>
        <button>
          {" "}
          <WhatsappLogo size={28} color="#ffff" /> Faça seu orçamento
        </button>
      </InfoCompany>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
