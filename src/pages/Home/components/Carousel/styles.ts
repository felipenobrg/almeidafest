import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  z-index: 0;

  img {
    width: 100%;
    height: 35rem;
  }

  @media (max-width: 768px) {
    img {
      height: 20rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100rem;
  max-width: 400px; 
`;

export const ImageText = styled.div`
  position: absolute;
  color: ${(props) => props.theme["white"]};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  text-align: center;
  border-radius: 9px;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    padding: 0.2rem;
    font-size: 1.1rem;
  }
`;

export const ImageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  font-size: 1.5rem;
  position: absolute;
  margin-top: 12rem;
  padding: 1rem;
  border: 0;
  border-radius: 9px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;

  &:hover {
    transition: 0.6s ease;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
  }

  @media (max-width: 768px) {
    margin-top: 6rem;
    font-size: 0.95rem;
    padding: 0.6rem;
  }
`;
