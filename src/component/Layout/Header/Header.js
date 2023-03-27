import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';


const HeaderStyled  = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  font-family: 'Autour One', cursive;
  font-weight: bold;
  color: #0e606b;
  padding: 0.5rem 1rem;
  z-index: 2;
  border-bottom: 3px dashed #1697A6;
`;

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('https://www.pngitem.com/pimgs/m/146-1468479_white-circle-transparent-png-white-circle-logo-png.png');
  background-repeat: no-repeat;
  background-size: contain;
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

const DropdownItem = styled.a`
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;

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

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleDropdownClick = () => {
      setIsOpen(!isOpen);
  };
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  const { handleButtonClick } = props;
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 0 && windowWidth < 1080) {
        handleButtonClick('home');
      } else if (windowWidth >= 1080 && windowWidth < 2160) {
        handleButtonClick('about');
      } else {
        handleButtonClick('courses');
      }
    };

    window.addEventListener('resize', handleResize);

    // remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleButtonClick]);

  return ( 
      <>
        <HeaderStyled >
          <LogoImage />
          <LogoText>EngPlayground</LogoText>
          <NavMenuStyled>
            <NavLinkStyled to="/" active={props.activeButton === 'home'} onClick={() => props.handleButtonClick('home')}>Home</NavLinkStyled>          
            <NavLinkStyled to="/about" active={props.activeButton === 'about'} onClick={() => props.handleButtonClick('about')}>About</NavLinkStyled>
            <NavLinkStyled to="/about" active={props.activeButton === 'courses'} onClick={() => props.handleButtonClick('courses')}>Courses</NavLinkStyled>
            <NavLinkStyled to="/contact" active={props.activeButton === 'contact'} onClick={() => props.handleButtonClick('contact')}>Contact</NavLinkStyled>
            <NavLinkStyled to="/threejs" active={props.activeButton === 'threejs'} onClick={() => props.handleButtonClick('threejs')}>Threejs</NavLinkStyled>
            {isLoggedIn ? (
                <>
                  <UserName>UserName</UserName>
                  <NavLinkStyled onClick={handleDropdownClick}> <StyledFaEllipsisV/> </NavLinkStyled>
                  {isOpen && (
                    <DropdownContent>
                      <DropdownItem>Change info</DropdownItem>
                      <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                    </DropdownContent>
                  )}
                </>
              ) : (
                <>
                  <NavLinkStyled active={props.activeButton === 'signup'} onClick={() => props.handleButtonClick('signup')}>Sign Up</NavLinkStyled>
                  <NavLinkStyled to="/login" active={props.activeButton === 'login'} onClick={() => props.handleButtonClick('login')} >Login</NavLinkStyled>              
                </>
              )}
            <StyledFaBars/>
          </NavMenuStyled>      
        </HeaderStyled >
      </>
     );
}

export default Header;