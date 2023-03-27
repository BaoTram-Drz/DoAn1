import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 60%;
  margin-top: 100px;
`;

const TopSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  overflow: hidden;
  width: 100%;
  height: 45%;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  background-color: #fcb69f;
`;

const TopSectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  grid-row: 1;
  grid-column: 1;
`;

const TopSectionDescription = styled.div`
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;
  color: #333;
  max-width: 100%;
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(50% - 25px);
  padding: 100px;
`;

const RoundedImage = styled.img`
  width: 40%;
  height: 40%;
  border-radius: 100%;
  margin-left: auto;
  margin-right: 50px;
`;

const BottomDescription = styled.p`
  font-size: 24px;
  color: #333;
  max-width: 50%;
  text-align: right;
`;

function AboutPage() {
  return (
    <PageContainer>
      <TopSectionContainer>
        <TopSectionImage src="https://via.placeholder.com/600x400" alt="About Image" />
        <TopSectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          convallis magna. Suspendisse euismod elit ut nulla fermentum, at
          ultrices massa ullamcorper.
        </TopSectionDescription>        
      </TopSectionContainer>
      <BottomSection>
        <BottomDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          convallis magna. Suspendisse euismod elit ut nulla fermentum, at
          ultrices massa ullamcorper.
        </BottomDescription>
        <RoundedImage src="https://via.placeholder.com/200x200" alt="About Image" />
      </BottomSection>
    </PageContainer>
  );
};

export default AboutPage;
