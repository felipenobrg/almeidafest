import { styled } from "styled-components";

export const AboutTendaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  text-align: center;
  margin: 2rem 0 6rem 0;

  @media (max-width: 768px) {
     flex-direction: column;
     gap: 0rem;
    }
`;

export const InformationTendaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;


  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    font-size: 1.1rem;
    padding: 1rem;
    width: 20rem;
    border-radius: 9px;
    border: 0;
    background: ${(props => props.theme["green-300"])};
    cursor: pointer;
    font-weight: bold;
    color: ${(props => props.theme["white"])};

    &:hover {
        background: ${(props => props.theme["green-400"])};
        transition: 0.3s background-color;
    }
  }

  @media (max-width: 768px) {
      gap: 0.3rem;

      button {
        width: 12rem;
        margin: 0 auto;
        margin-top: 0.8rem;
      }
    }
`;

export const TendaType = styled.h1`
  font-family: "Roboto Slab";
  font-weight: 100;
  font-size: 2.5rem;

  span {
    font-weight: bold;
    color: #ff3c04;
  }

  @media (max-width: 768px) {
      font-size: 1.5rem;
      margin: 0 auto;
      margin-top: 0.5rem;
    }
`;

export const CheckSize = styled.h2`
  color: ${(props => props.theme["gray-700"])};

  @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 0 auto;
    }
`;

export const TendaSizeContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    margin-top: 0.5rem;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    }
`;

export const TendaImgContainer = styled.div`
  display: flex;
  img {
    width: 20rem;
  }

  @media (max-width: 768px) {
     img {
        width: 70%;
        margin: 0 auto;
     }
    }
`;
