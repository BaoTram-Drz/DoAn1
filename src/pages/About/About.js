import styled from "styled-components";
import aboutround from "./aboutround.png";

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 20%;
  padding-top: 2.5%;
  background: #FFB3AE;

  @media (max-width: 1300px) {
    margin-top: 5%;
  }
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 540px) {
    margin-top: -40%;
  }
  @media (max-width: 480px) {
    margin-top: -80%;
  }
  @media (max-width: 300px) {
    margin-top: -100%;
  }
`;

const BigContainer = styled.div`
  width: 80%;
  height: 95%;
  margin-left: 15%;

  background: #FFFFFF;
  border: 5px dashed #1697A6;
  border-radius: 189px;
`;

const BigDescription = styled.p`
  width: 60%;
  margin: 8% auto 3% auto;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 3rem; 
  line-height: 1.25;
  color: #FFC24B;
  text-shadow: 0px 0.125rem 0.125rem #FFF4F1;
  
  @media (max-width: 1300px) {
    font-size: 2.7rem;
  }
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin: 10% auto 5% auto;
    font-size: 2.2rem;
  }
  @media (max-width: 768px) {
    margin: 10% auto 5% auto;
    font-size: 2rem;
  }
  @media (max-width: 540px) {
    margin: 15% auto 10% auto;
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    margin: 20% auto 10% auto;
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    margin: 30% auto 15% auto;
    font-size: 1.5rem;
  }
`;

const SmallDescription = styled.p`
  width: 60%;
  margin: auto;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem; 
  line-height: 1.25;
  
  @media (max-width: 1300px) {
    width: 65%;
    font-size: 1.7rem;
  }
  @media (max-width: 1200px) {
    width: 65%;
    font-size: 1.5rem;
  }
  @media (max-width: 912px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (max-width: 300px) {
    width: 70%;
    font-size: 0.7rem;
  }
`;

const RoundedImage = styled.img`
  position: absolute;
  box-sizing: border-box;
  width: 20%;
  height: 400px;
  left: 2%;
  top: 5%;
  border: 25px solid #FFF4F1;
  border-radius: 250px;
  
  @media (max-width: 1300px) {
    width: 25%;
    height: 350px;
    border: 15px solid #FFF4F1;
  }
  @media (max-width: 1200px) {
    width: 25%;
    height: 320px;
  }
  @media (max-width: 912px) {
    width: 25%;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 20%;
    height: 250px;
  }
  @media (max-width: 540px) {
    width: 25%;
    height: 200px;
    border: 10px solid #FFF4F1;
  }
  @media (max-width: 480px) {
    width: 25%;
    height: 150px;
    border: 10px solid #FFF4F1;
  }
`;


function AboutPage() {
  return (
    <PageContainer>
      <BigContainer>
        <BigDescription>About Us - Best choice for you</BigDescription>
        <SmallDescription>
        « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
        </SmallDescription>
      </BigContainer>
      <RoundedImage src={aboutround}/>
    </PageContainer>
  );
};

export default AboutPage;
