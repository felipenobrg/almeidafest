import { WhatsappLogo } from "phosphor-react";
import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { AboutToalhasContainer, ToalhasImgContainer, InformationToalhasContainer, ToalhasType, ToalhasSize } from "./styles";
import ToalhasImg from "../../assets/Toalhas/Toalhas.jpg"
import { useContext, useEffect } from "react";
import { WhatsAppApiContext } from "../../context/WhatsAppApiContext";

export function Toalhas() {
  const { handleWhatsAppClick, setText } = useContext(WhatsAppApiContext)
  useEffect(() => {
    setText("Olá. Gostaria fazer um orçamento de Toalhas");
  }, [setText]); 
  return (
    <>
      <Header />
      <SectionLinks />

      <AboutToalhasContainer>
        <ToalhasImgContainer>
          <img src={ToalhasImg} loading="lazy" alt="" />
        </ToalhasImgContainer>
        <InformationToalhasContainer>
          <ToalhasType>
            <span>Locação</span> de Toalhas para Mesa
          </ToalhasType>
          <ToalhasSize>
            <h1>Confira os TAMANHOS</h1>
            <p>Mesa: 150x150cm </p>
          </ToalhasSize>
          <button onClick={handleWhatsAppClick}>
            FAÇA SEU ORÇAMENTO <WhatsappLogo size={24} />
          </button>
        </InformationToalhasContainer>
      </AboutToalhasContainer>

      <WhatsAppButton />
    </>
  );
}
