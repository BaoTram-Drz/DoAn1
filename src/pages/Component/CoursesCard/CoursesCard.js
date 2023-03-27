import React from 'react';
import styled from 'styled-components';

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width:80%;
  float: right;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Card = styled.div`
  width: 250px;
  height: 300px;
  background: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
  }
`;

const Blob = styled.div`
  height: 10px;
  width: 75%;
  border-radius: 0 0 30px 30px;
  margin: 0 auto;
  background-color: #4bb8ff;
  visibility: visible;
  transition: all 0.3s;
  ${Card}:hover & {
    height: 0;
  }
`;

const Img = styled.span`
  display: flex;
  margin: 30px auto 10px auto;
  width: 100px;
  height: 100px;
  background-color: #4bb8ff;
  border-radius: 50%;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  ${Card}:hover & {
    width: 100%;
    height: 70%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    background-image: url(${props => props.imageUrl});
    z-index: 99999;
  }
`;

const Name = styled.h2`
  padding: 15px 10px;
  font-size: 25px;
  transition: all 0.1s;
  z-index: -99;
  line-height: 17px;
  ${Card}:hover & {
    opacity: 0;
    display: none;
    position: absolute;
    transition: all 0.5s;
  }
`;

const Description = styled.p`
  opacity: 1;
  transition: all 0.75s;
  ${Card}:hover & {
    display: none;
    position: absolute;
    bottom: 15px;
    left: 35px;
    opacity: 1;
    transition: all 0.1s;
  }
`;
function CardList() {
    const Info = [    
      {      
      name: 'Product A',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product A description',    
    },    
      {      
      name: 'Product B',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product B description',    
    },    
      {      
      name: 'Product C',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product C description',    
    },  
    {      
      name: 'Product A',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product A description',    
    },    
      {      
      name: 'Product B',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product B description',    
    },    
      {      
      name: 'Product C',      
      image: 'https://via.placeholder.com/200x200.png',      
      des: 'This is product C description',    
    },   
  ];

  return (
    <CardListContainer>
      {Info.map((item, index) => (
        <Card key={index}>
          <Blob />
          <Img imageUrl={item.image} alt={item.name} />
          <Name>{item.name}</Name>
          <Description>{item.des}</Description>
        </Card>
      ))}
    </CardListContainer>
  );
}

export default CardList;