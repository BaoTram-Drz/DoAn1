import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { useState} from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import logo from './logo.png';


const HeaderStyled  = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  font-family: 'Autour One', cursive;
  font-weight: bold;
  color: #0e606b;
  padding: 0rem 1rem;
  z-index: 2;
  border-bottom: 3px dashed #1697A6;
`;

const LogoImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 2%;
  border-radius: 50%;
  @media screen and (max-width: 821px) {
    display: none; 
  }
  @media screen and (max-width: 768px) {
    display: block; 
  }
`;
const LogoText = styled.div`
  margin: auto auto auto 1%;
  font-family: 'Bungee Inline', cursive;
  font-size: 1.5rem;
  font-weight: 300;
`;

const NavMenuStyled = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin-right: 2%; 
  
  @media screen and (max-width: 768px) {
    margin-right: 0; 
  }
`;

const NavLinkStyled = styled(Link)`
  width: 90px;
  margin: 0.5%;
  padding: 0.5% 0.5%;
  text-align: center;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    color: #ffc24b;
  }

  @media screen and (max-width: 768px) {
    width: 70px; /* giảm giá trị từ 80px xuống 70px */
    margin: 0.25%; /* giảm giá trị từ 0.5% xuống 0.25em */
    padding: 0.5% 0.5%;
    font-size: 0.8rem; /* giảm kích thước font chữ */
  }
    
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavScrollLink = styled(ScrollLink)`
  width: 90px;
  margin: 0.5%;
  padding: 0.5% 0.5%;
  text-align: center;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    color: #ffc24b;
  }

  @media screen and (max-width: 768px) {
    width: 70px; /* giảm giá trị từ 80px xuống 70px */
    margin: 0.25%; /* giảm giá trị từ 0.5% xuống 0.25em */
    padding: 0.5% 0.5%;
    font-size: 0.8rem; /* giảm kích thước font chữ */
  }
    
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const UserName = styled.span`
  width: 100px;
  margin: 0.5%;
  padding: 0.5% 0.5%;

  @media screen and (max-width: 821px) {
    display: none; 
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 7%;
  border: 1px solid #0e606b;
  border-radius: 10px;
  background-color: white;

  @media screen and (max-width: 768px) {
    
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  color: ${props => props.active ? '#ffc24b' : '#0e606b'};

  &:hover {
    background-color: #f1f1f1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0.5em;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 0.3em;
  }
`;
const StyledFaBars = styled(FaBars)`
  display: none;  
  cursor: pointer;
  color: #0e606b;
  
  @media (max-width: 768px) {
    display: block;
  }
`;
const StyledFaEllipsisV = styled(FaEllipsisV)`
  padding: 2px;
  border: 2px solid ${props => props.active ? '#ffc24b' : '#0e606b'};
  border-radius:50%;
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleDropdownClick = () => {
      setIsOpen(!isOpen);
  };

  return ( 
      <>
        <HeaderStyled>
          <LogoImage bgImage={logo}/>
          <LogoText>EngPlayground</LogoText>
          <NavMenuStyled>
            <NavLinkStyled 
              to="/" 
              active={ activeSection === 'home'} 
              onClick={() => {
                setActiveSection('home');
              }}
            >
              Home
            </NavLinkStyled>          
            <NavScrollLink
              activeClass="active"
              active={ activeSection === 'about' }
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('about')}
            >
              About
            </NavScrollLink>
            <NavScrollLink
              activeClass="active"
              active={activeSection === 'courses'}
              to="courses-section"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('courses')}
            >
              Courses
            </NavScrollLink>
            <NavScrollLink
              activeClass="active"
              active={activeSection === 'contact'}
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('contact')}
            >
              Contact
            </NavScrollLink>
            
            <NavLinkStyled 
              to="/layoutlearn" 
              active={ activeSection === 'layoutlearn'} 
              onClick={() => {
                setActiveSection('layoutlearn');
              }}
            >
              Learn
            </NavLinkStyled>
            {isLoggedIn ? (
                <>
                  <UserName>UserName</UserName>
                  <NavLinkStyled onClick={handleDropdownClick}> <StyledFaEllipsisV/> </NavLinkStyled>
                  {isOpen && (
                    <DropdownContent>
                      <DropdownItem>Change info</DropdownItem>
                      <DropdownItem 
                        to="/login" 
                        active={ activeSection === 'login'} 
                        onClick={() => {
                          setActiveSection('login');
                          setIsLoggedIn(false);
                        }}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownContent>
                  )}
                </>
              ) : (
                <>
                  <NavLinkStyled 
                    to="/signup" 
                    active={ activeSection === 'signup'} 
                    onClick={() => {
                      setActiveSection('signup');
                    }}
                  >
                    Sign Up
                  </NavLinkStyled>
                  <NavLinkStyled 
                    to="/login" 
                    active={ activeSection === 'login'} 
                    onClick={() => {
                      setActiveSection('login');
                    }}
                  >
                    Login
                  </NavLinkStyled>              
                </>
              )}
            <StyledFaBars/>
          </NavMenuStyled>      
        </HeaderStyled >
      </>
     );
}

export default Header;