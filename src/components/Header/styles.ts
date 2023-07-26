import { styled } from "styled-components";

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem;
   background-color: ${(props => props.theme["white"])};
   position: sticky;
   top: 0;
   z-index: 100;

   img {
    width: 20rem;
   }

   @media (max-width: 768px) {
     img {
      width: 10rem;
     }
  }
`