import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: white;
  color: black;
  font-size: 17px;
  font-weight: 600;
  padding: 0.5em 1em;
  border: 1px solid black;
  border-radius: 10em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }

  &:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 1;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5em 1em;
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// const DropMenu = ({ options }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <DropdownContainer>
//       <DropdownButton onClick={handleDropdownClick}>Dropdown</DropdownButton>
//       {isOpen && (
//         <DropdownContent>
//           {options.map((option) => (
//             <DropdownItem key={option.id}>{option.name}</DropdownItem>
//           ))}
//         </DropdownContent>
//       )}
//     </DropdownContainer>
//   );
// };

// export default DropMenu;
const DropMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleDropdownClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <DropdownContainer>
        <DropdownButton onClick={handleDropdownClick}>Dropdown</DropdownButton>
        {isOpen && (
          <DropdownContent>
            <DropdownItem>Sửa thông tin</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownContent>
        )}
      </DropdownContainer>
    );
  };
  
  export default DropMenu;