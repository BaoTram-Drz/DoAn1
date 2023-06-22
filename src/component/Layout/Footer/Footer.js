import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 40px;
  background-color: #f8f8f8;
  border-top: 2px dashed #1697a6;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 714px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Column = styled.div`
 text-align: center;
`;

const Heading = styled.h3`
  font-family: 'roboto';
  font-size: 1.5rem;
  font-weight: bold;
  color: #0e606b;
  margin-bottom: 20px;
  
  @media (max-width: 714px) {
    font-size: 1rem;
  }
`;

const Content = styled.p`
  font-family: 'Autour One';
  color: #0e606b; 
  font-size: 1rem;
  margin-bottom: 10px;
  
  @media (max-width: 714px) {
    font-size: 0.8rem;
  }
 `;

const SocialLinks = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 10px; 
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0e606b;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
  background-color: #1697a6;
  }
`;

const Copyright = styled.p` 
  text-align: center; 
  color: #0e606b;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Column>
          <Heading>EngPlayground</Heading>
          <Content>
          EngPlayground is a platform for interactive English learning. We provide engaging and fun activities to improve your language skills. Whether you are a beginner or an advanced learner, EngPlayground offers a wide range of resources to enhance your English proficiency.
          </Content>
        </Column>
        <Column>
          <Heading>Skill</Heading>
          <Content>Watch cartoon</Content>
          <Content>Read stories</Content>
          <Content>Learn vocabulary</Content>
          <Content>Mini game for you</Content>
        </Column>
        <Column>
          <Heading>Connect With Us</Heading>
          <SocialLinks>
            <SocialLink href="#">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="#">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </Column>
      </Row>
      <div>
        <Column>
          <Copyright>
            © {new Date().getFullYear()} EngPlayground. All Rights Reserved.
          </Copyright>
        </Column>
      </div>
    </FooterContainer>
  );
};

export default Footer;