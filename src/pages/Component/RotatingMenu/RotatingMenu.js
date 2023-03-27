import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


const Diamond = styled.div`
  width: 25%;
  aspect-ratio: 1 / 1;
  position: fixed;
  left: -15%;
  top: 20%;
  background-color: gray;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 gray, 0 6px 5px 0 gray;
  transition: transform 0.2s ease-in-out, background-color 1s ease-in-out, box-shadow 1s ease-in-out;
  display: none;
`;
// const Diamond = styled.div`
//   width: 25%;
//   aspect-ratio: 1 / 1;
//   position: fixed;
//   left: -15%;
//   top: 20%;
//   background-color: ${props => props.color};
//   border-radius: 50%;
//   box-shadow: 0 4px 8px 0 ${props => props.color}, 0 6px 5px 0 ${props => props.color};
//   transition: transform 0.2s ease-in-out, background-color 1s ease-in-out, box-shadow 1s ease-in-out;
// `;

const ComponentAbout = styled.div`
  width: 150px;
  aspect-ratio: 1 / 1;
  margin-top: 50%;
  margin-left: 70%;
  background-color: red;
  border-radius: 35%;
`;
const ComponentContact = styled.div`
  width: 70px;
  aspect-ratio: 1 / 1;
  margin-top: 50%;
  margin-left: 70%;
  background-color: red;
  border-radius: 35%;
`;

function RotatingMenu({ showHome, showAbout, showContact }) {
    const [color, setColor] = useState("pink");
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < 500) {
        setColor("pink");
      } else if (scrollTop < 1000) {
        setColor("purple");
      } else {
        setColor("violet");
      }
    };
  
    return (
      <Diamond color={color}>
        {showHome && (

          <p></p>
        )}
        {showAbout && (
          <ComponentAbout>
            <Link to="about" smooth duration={1000}>
              About
            </Link>
          </ComponentAbout>
        )}
        {showContact && (
          <ComponentContact>
            <Link to="contact" smooth duration={1000}>
              Contact
            </Link>
          </ComponentContact>
        )}
      </Diamond>
    );
  }
  

export default RotatingMenu;
