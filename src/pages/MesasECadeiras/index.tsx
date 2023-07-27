import { WhatsappLogo } from "phosphor-react";
import { Header } from "../../components/Header";
import { SectionLinks } from "../../components/SectionLinks";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import {
  AboutMesasECadeirasContainer,
  InformationMesasECadeirasContainer,
  MesasECadeirasImgContainer,
  MesasECadeirasSize,
  MesasECadeirasType,
} from "./styles";

import MesasECadeirasImg from "../../assets/MesasECadeiras/MesasECadeiras.jpeg"

export function MesasECadeiras() {
  return (
    <>
      <Header />
      <SectionLinks />
      <AboutMesasECadeirasContainer>
        <MesasECadeirasImgContainer>
          <img src={MesasECadeirasImg} alt="" />
        </MesasECadeirasImgContainer>
        <InformationMesasECadeirasContainer>
          <MesasECadeirasType><span>Locação</span> de Mesas e Cadeiras</MesasECadeirasType>
          <MesasECadeirasSize>
            <h1>Confira os TAMANHOS</h1>
            <p>Mesa: 70x70cm C/L</p>
            <p>Cadeira: 51x43x89cm C/L/A</p>
            <span>Peso suportado: 154kg</span>
          </MesasECadeirasSize>
          <button>
            FAÇA SEU ORÇAMENTO <WhatsappLogo size={24} />
          </button>
        </InformationMesasECadeirasContainer>
      </AboutMesasECadeirasContainer>

      <WhatsAppButton />
    </>
  );
}
