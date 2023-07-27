import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.aside<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  z-index: 100;
  position: fixed;
  top: 110px;
  right: 0px;
  width: 100vw;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 4px;
  animation: ${slideIn} 0.3s ease-in-out;
  padding: 1rem;
`;

export const DropdownList = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme["black"]};
    display: block;
    padding: 17px 18px;
    text-align: center;
    text-transform: uppercase;
  }
`;

interface DropdownButtonProps {
  open: boolean;
  onClick: () => void;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  position: absolute;
  z-index: 100;
  border: 0;
  padding: 15px 15px;
  margin-top: -1rem;
  background: none;
  left: 30px;

  .icon {
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["black"]};
    position: relative;
    display: flex;
  }

  .icon:before,
  .icon:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["black"]};
    transition: transform 0.3s ease-in-out;
  }

  .icon:before {
    top: -6px;
  }

  .icon:after {
    top: 6px;
  }
`;