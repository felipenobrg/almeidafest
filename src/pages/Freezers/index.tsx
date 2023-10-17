import { WhatsappLogo } from "phosphor-react";
import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import {
  FreezersContainer,
  FreezersType,
  FreezersSize,
  FreezersImgContainer,
  FreezersInformationContainer,
} from "./styles";

import FreezerGrande from "../../assets/Freezer/FreezerGrande.jpg";
import FreezerPequena from "../../assets/Freezer/FreezerPequena.jpg";
import { useContext, useEffect } from "react";
import { WhatsAppApiContext } from "../../context/WhatsAppApiContext";
import { Footer } from "../../components/Footer";

export function Freezers() {
  const { handleWhatsAppClick, setText } = useContext(WhatsAppApiContext);
  useEffect(() => {
    setText("Olá. Gostaria fazer um orçamento de Freezer");
  }, [setText]);
  return (
    <>
      <Header />
      <SectionLinks />

      <FreezersContainer>
        <FreezersImgContainer>
          <img src={FreezerGrande} alt="" />
        </FreezersImgContainer>
        <FreezersInformationContainer>
          <FreezersType>
            <span>Loçacão</span> de Freezer Média <br /> 2 Tampas
          </FreezersType>
          <FreezersSize>
            <p>311 Litros</p>
          </FreezersSize>
          <button onClick={handleWhatsAppClick}>
            Faça seu orçamento <WhatsappLogo size={24} />
          </button>
        </FreezersInformationContainer>
      </FreezersContainer>

      <FreezersContainer>
        <FreezersImgContainer>
          <img src={FreezerPequena} alt="" />
        </FreezersImgContainer>
        <FreezersInformationContainer>
          <FreezersType>
            <span>Loçacão</span> de Freezer Pequena <br /> 1 Tampa{" "}
          </FreezersType>
          <FreezersSize>
            <p>214 Litros</p>
          </FreezersSize>
          <button onClick={handleWhatsAppClick}>
            FAÇA SEU ORÇAMENTO <WhatsappLogo size={24} />
          </button>
        </FreezersInformationContainer>
      </FreezersContainer>
      <WhatsAppButton />

      <Footer />
    </>
  );
}
