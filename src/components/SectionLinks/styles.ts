import { styled } from "styled-components";


export const SectionLinksContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme["gray-100"]}; 
  border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
  padding: 1rem 0;
  

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: transparent;
    transition: color 0.3s ease;
    position: relative;
  }

  a:hover {
    color: ${(props) => props.theme["gray-500"]};
  }

  a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme["gray-500"]};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  a:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 0;
    overflow: auto;
    a {
    font-size: 0.8rem;
    text-align: center;
    }
  }
`;