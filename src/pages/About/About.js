import styled from "styled-components";

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 20%;
  padding-top: 2.5%;
  background: #FFB3AE;
`;

const BigContainer = styled.div`
  width: 80%;
  height: 95%;
  margin-left: 15%;

  background: #FFFFFF;
  border: 5px dashed #1697A6;
  border-radius: 189px;
`;

const BigDescription = styled.div`
  width: 60%;
  margin: 8% auto 3% auto;
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 45px;
  color: #FFC24B;
  text-shadow: 0px 2px 2px  #FFF4F1;
`;

const SmallDescription = styled.div`
  width: 60%;
  margin: auto;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 45px;
`;

const RoundedImage = styled.img`
position: absolute;
  box-sizing: border-box;
  width: 20%;
  height: 400px;
  left: 2%;
  top: 5%;

  background-image: url('https://via.placeholder.com/200x200');
  border: 25px solid #FFF4F1;
  border-radius: 250px;
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
      <RoundedImage/>
    </PageContainer>
  );
};

export default AboutPage;
