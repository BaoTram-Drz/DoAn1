import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';


const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  padding: 20px;
  font-family: 'Autour One', cursive;
  font-weight: bold;
  color: #0e606b;
  background-color: white;
  border-top: 2px dashed #1697a6;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #0e606b;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #0e606b;
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #0e606b;
`;

const StyledFaInstagram = styled(FaInstagram)`  
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #0e606b;
`;

const StyledFaFacebookF = styled(FaFacebookF)`  
  width: 20px;
  height: 20px;
  padding: 2px;
  cursor: pointer;
  color: #0e606b;
  border: 3px solid #0e606b;
  border-radius: 35%;
`;

const StyledFaTwitter = styled(FaTwitter)`  
  width: 20px;
  height: 20px;
  padding: 2px;
  cursor: pointer;
  color: #0e606b;
  border: 3px solid #0e606b;
  border-radius: 35%;
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Our Services</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
      </FooterLinks>
      <SocialLinks>
        <SocialLink href="#">
          <StyledFaFacebookF/>
        </SocialLink>
        <SocialLink href="#">
          <StyledFaTwitter/>
        </SocialLink>
        <SocialLink href="#">
          <StyledFaInstagram/>
        </SocialLink>
      </SocialLinks>
      <FooterLinks>
        <EmailLink href="mailto:contact@example.com">2052xxxx@gm.uit.edu.vn</EmailLink>
        <FooterLink href="#">©2023</FooterLink>
      </FooterLinks>      
    </FooterContainer>
  );
}

export default Footer;