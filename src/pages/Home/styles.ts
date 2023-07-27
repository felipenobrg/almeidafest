import { styled } from "styled-components";

export const InfoCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;

  font-family: "Roboto Slab", sans-serif;
  padding: 2rem;
  text-align: center;
  background: ${(props) => props.theme["gray-100"]};



  h1 {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 2rem;
    width: 80%;
    margin-bottom: 0.3rem;

    strong {
      color: #D11B18;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      font-size: 1.65rem;
    }
  }

  p {
    font-size: 1.2rem;
    width: 70%;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    width: 22%;
    background: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["white"]};
    margin-top: 1rem;
    padding: 1.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    border: 0;
    border-radius: 9px;
    cursor: pointer;

    &:hover {
      transition: 0.6s ease;
      background: ${(props) => props.theme["green-400"]};
    }

    @media (max-width: 768px) {
      width: 100%;
      gap: 5px;
      padding: 1rem;
      font-size: 1rem;
    }
  }
`;
