import { styled } from "styled-components";

export const FreezersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  text-align: center;
  margin: 4rem 0 6rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const FreezersInformationContainer = styled.div`
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
        padding: 0.8rem;
        width: 12rem;
        margin: 0 auto;
        margin-top: 0.8rem;
        gap: 0;

        svg {
        width: 15rem;
      }
      }
    }
`;

export const FreezersType = styled.h1`
  color: #ff3c04;
  font-family: "Roboto Slab";
  font-size: 2.5rem;

  span {
    font-weight: 100;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
  }
`;

export const FreezersSize = styled.div`
  h1 {
   font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};
    margin-top: 0.5rem;
  }

  span {
    color: ${(props) => props.theme["gray-500"]};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 0.5rem;
  }
`;

export const FreezersImgContainer = styled.div`
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
