import { styled } from "styled-components";



export const InfoCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  font-family: 'Roboto Slab', sans-serif;
  padding: 2rem;
  text-align: center;
  background: ${(props) => props.theme["gray-100"]};

  h1 {
   color: ${(props) => props.theme["gray-700"]};
  }

  p {
    font-size: 1.2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    width: 50%;
    background: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["white"]};
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    font-weight: bold;
    border: 0;
    border-radius: 9px;
    cursor: pointer;
  
    &:hover {
      transition: 0.6s ease;
      background: ${(props) => props.theme["green-400"]};
    }
  }
`;