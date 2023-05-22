import styled from "styled-components";
import aboutround from "./aboutround.png";

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  margin-top: 20%;
  padding-top: 2.5%;
  background: #FFB3AE;


  @media (max-width: 1300px) {
    margin-top: 0px;
    height: 650px;
  }
  @media (max-width: 912px) {
    margin-top: -10%;
    height: 600px;
  }
  @media (max-width: 768px) {
    margin-top: -20%;
    height: 550px;
  }
  @media (max-width: 540px) {
    margin-top: -40%;
    height: 500px;
  }
  @media (max-width: 415px) {
    margin-top: -80%;
    height: 450px;
  }
  @media (max-width: 300px) {
    margin-top: -150%;
    height: 450px;
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
    
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
     
    font-size: 2rem;
  }
  @media (max-width: 540px) {
     
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
     margin: 15% 22% 3% auto;
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
     
    font-size: 1rem;
  }
`;

const SmallDescription = styled.p`
  width: 60%;
  margin: auto;
  font-family: 'Roboto';
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
        Chào mừng bạn đến với trang web của chúng tôi, nơi bạn có thể học tiếng Anh thông qua những trò chơi đơn giản. Nền tảng của chúng tôi cung cấp những trò chơi hấp dẫn và tương tác được thiết kế để cải thiện từ vựng, ngữ pháp và kỹ năng hiểu. Dù bạn là người mới học hay người học nâng cao, những trò chơi của chúng tôi phù hợp với mọi cấp độ. Hãy bắt đầu học ngay hôm nay và tận hưởng niềm vui trong quá trình học!</SmallDescription>
      </BigContainer>
      <RoundedImage src={aboutround}/>
    </PageContainer>
  );
};

export default AboutPage;
