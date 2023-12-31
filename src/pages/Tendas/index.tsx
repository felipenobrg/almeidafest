import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import {
  AboutTendaContainer,
  CheckSize,
  InformationTendaContainer,
  TendaImgContainer,
  TendaSizeContainer,
  TendaType,
} from "./styles";
import TendaPiramide from "../../assets/Tendas/Tenda-Piramide.jpg";
import TendaChapeuDeBruxa from "../../assets/Tendas/Tenda-Chapeu.jpeg";

import { CheckCircle, WhatsappLogo } from "phosphor-react";
import { useContext, useEffect } from "react";
import { WhatsAppApiContext } from "../../context/WhatsAppApiContext";
import { Footer } from "../../components/Footer";

export function Tendas() {
  const { handleWhatsAppClick, setText } = useContext(WhatsAppApiContext)
  useEffect(() => {
    setText("Olá. Gostaria fazer um orçamento de Tendas");
  }, [setText]); 
  return (
    <>
      <Header />
      <SectionLinks />

      <AboutTendaContainer>
        <TendaImgContainer>
          <img src={TendaChapeuDeBruxa} loading="lazy" className="image-placeholder" alt="Tenda Chapéu de Bruxa" />
        </TendaImgContainer>
        <InformationTendaContainer>
        <TendaType>
        Loçacão de Tendas <span>Chapéu de Bruxa</span>
        </TendaType>
        <CheckSize>Confira os TAMANHOS</CheckSize>
        <TendaSizeContainer>
          <div>
            <p><CheckCircle size={22} color="#ff3c04" weight="fill" /> 3x3</p>
            <p><CheckCircle size={22} color="#ff3c04" weight="fill" /> 4x4</p>
          </div>
          <div>
            <p><CheckCircle size={22} color="#ff3c04" weight="fill" /> 6x6</p>
          </div>
        </TendaSizeContainer>
        <button onClick={handleWhatsAppClick}>FAÇA SEU ORÇAMENTO <WhatsappLogo size={22} /></button>
        </InformationTendaContainer>
      </AboutTendaContainer>

      <AboutTendaContainer>
        <TendaImgContainer>
          <img src={TendaPiramide} loading="lazy"alt="Tenda Chapéu Pirâmide"/>
        </TendaImgContainer>
        <InformationTendaContainer>
        <TendaType>
        Loçacão de Tendas <span>Pirâmide</span>
        </TendaType>
        <CheckSize>Confira os TAMANHOS</CheckSize>
        <TendaImgContainer>
          <div>
            <p><CheckCircle size={22} color="#ff3c04" weight="fill" /> 4x4</p>
            <p><CheckCircle size={22} color="#ff3c04" weight="fill" /> 5x5</p>
          </div>
        </TendaImgContainer>
        <button onClick={handleWhatsAppClick}>FAÇA SEU ORÇAMENTO<WhatsappLogo size={22} /></button>
        </InformationTendaContainer>
      </AboutTendaContainer>
      <Footer />
     
      <WhatsAppButton />
    </>
  );
}
