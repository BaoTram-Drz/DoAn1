import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const CoursesName = styled.div`
  width: 50%;
  height: 150px;
  margin: 15% auto 3% auto;
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  border-radius: 100px;
  text-align: center;
`;

const CoursesNameText = styled.p`
  margin-top: 5%;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 45px;

  color: #F47068;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width:60%;
  margin: auto;
  padding-top: 50px;
`;

const Card = styled.div`
  width: 30%;
  height: 500px;
  background: #FFF4F1;
  border: 1px solid #F47068;
  border-radius: 20px;
  text-align: center;
`;

const Blob = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  background: #FFB3AE;
  border-radius: 20px 20px 0px 0px;

  visibility: visible;
  transition: all 0.3s;
`;

const ImgContainer = styled.span`
  display: flex;
  margin-top: 0%;
  margin-left: 50%;
  margin-bottom: -45%;
  transform: translate(-50%, -60%);
  width: 250px;
  height: 250px;
  background: #FFFFFF;
  border: 5px dashed #FFC24B;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  font-size: 11px;
  background-image: url(${props => props.imageUrl});

  transition: all 0.5s;
  
  ${Card}:hover & {
    width: 80%;
    height: 70%;
    transform: translate(0%, -45%);
    border-radius: 20px;
    margin: 0 10% -40% 10%;
    background-image: url(${props => props.imageUrl});
    z-index: 99999;
  }
`;

const Img = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 50%;
  transition: all 0.5s;

  background-image: url(${props => props.imageUrl});
  ${Card}:hover & {
    border-radius: 20px;
  }
`;

const Name = styled.h2`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  color: #0E606B;
  ${Card}:hover & {
    display: none;
  }
`;

const Description = styled.p`
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #1697A6;
  ${Card}:hover & {
    display: none;
  }
`;

const LearnBtn = styled.div`
  position: relative ;
  width: 60%;
  margin: auto !important;
  background: #F47068;
  border-radius: 20px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #FFFFFF;
  cursor: pointer;

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
  ];

  return (
    <Container>
      <CoursesName>
        <CoursesNameText>Courses for You</CoursesNameText>
        </CoursesName>
      <CardListContainer>        
        {Info.map((item, index) => (
          <Card key={index}>
            <Blob />
            <ImgContainer>
              <Img imageUrl={item.image} alt={item.name} />
            </ImgContainer>
            <Name>{item.name}</Name>
            <Description>{item.des}</Description>
            <LearnBtn>
              Learn
            </LearnBtn>
          </Card>
        ))}
      </CardListContainer>
    </Container>
  );
}

export default CardList;