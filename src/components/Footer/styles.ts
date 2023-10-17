import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterContent = styled.div`
  max-width: 800px;
  text-align: center;
  font-size: 14px;
  color: #667; 

  a {
    color: #667;;
  }
  
`;

export const FooterLink = styled.a`
  color: #667;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;