import {
  CarouselContainer,
  ImageButton,
  ImageContainer,
  ImageText,
} from "./styles";

import { WhatsappLogo } from "phosphor-react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CarouselImage1 from "../../../../assets/CarouselImages/Image1.jpg";
import CarouselImage2 from "../../../../assets/CarouselImages/Image2.jpg";

import ResponsiveImageTenda from "../../../../assets/ResponsiveCarouselImages/ResponsiveTenda.jpg";

import { useState, useEffect } from "react";

export function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <>
      <CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {isMobile ? (
            <>
            <SwiperSlide>
              <ImageContainer>
                <img src={ResponsiveImageTenda} alt="" />
                <ImageText>
                  Faça seu o seu orçamento com quem tá há mais de 20 anos no
                  mercado!
                </ImageText>
                <ImageButton>
                  Clique para fazer seu orçamento <WhatsappLogo size={22} />
                </ImageButton>
              </ImageContainer>
            </SwiperSlide>
              <SwiperSlide>
              <ImageContainer>
                <img src={CarouselImage2} alt="" />
                <ImageText>
                  Faça seu o seu orçamento com quem tá há mais de 20 anos no
                  mercado!
                </ImageText>
                <ImageButton>
                  Clique para fazer seu orçamento <WhatsappLogo size={22} />
                </ImageButton>
              </ImageContainer>
            </SwiperSlide>
            </>
          ) : (
            <>
              <SwiperSlide>
                <ImageContainer>
                  <img src={CarouselImage1} alt="" />
                  <ImageText>
                    Faça seu o seu orçamento com quem tá há mais de 20 anos no
                    mercado!
                  </ImageText>
                  <ImageButton>
                    Clique para fazer seu orçamento <WhatsappLogo size={22} />
                  </ImageButton>
                </ImageContainer>
              </SwiperSlide>
              <SwiperSlide>
                <ImageContainer>
                  <img src={ResponsiveImageTenda} alt="" />
                  <ImageText>
                    Faça seu orçamento com quem tá há mais de 15 anos no
                    mercado!
                  </ImageText>
                  <ImageButton>
                    Clique para fazer seu orçamento <WhatsappLogo size={22} />
                  </ImageButton>
                </ImageContainer>
              </SwiperSlide>

              <SwiperSlide>
                <ImageContainer>
                  <img src={CarouselImage2} alt="" />
                  <ImageText>
                    Trabalhamos com: Tendas, Mesas e Cadeiras, Freezers
                  </ImageText>
                  <ImageButton>
                    Clique para fazer seu orçamento <WhatsappLogo size={22} />
                  </ImageButton>
                </ImageContainer>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </CarouselContainer>
    </>
  );
}
