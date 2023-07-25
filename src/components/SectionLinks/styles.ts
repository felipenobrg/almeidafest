import { styled } from "styled-components";

export const SectionLinksContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  border-top: 1px solid ${(props) => props.theme["gray-500"]};
  border-bottom: 1px solid ${(props) => props.theme["gray-500"]};
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-700"]};
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: none;
    background-color: transparent;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${(props) => props.theme["gray-500"]};
  }
`;