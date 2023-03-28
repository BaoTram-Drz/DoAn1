import React from 'react';
import styled from 'styled-components';
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin: 10% auto;
  background: #FFF4F1;
  border: 5px solid #1697A6;
  border-radius: 50px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin-left: 2rem;
`;

const FormTitle = styled.h1`
  position: absolute; 
  margin: 0% auto auto 20%;
  transform: translate(0, -50%);
  font-family: 'Margarine';
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  color: #FFC24B;
  text-shadow: 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white, 0 0 20px white;
  
`;

const Title = styled.p`
  width: 80%;
  margin-bottom:0.5rem;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
  text-shadow: 0 0 10px white;
`;

const FormInput = styled.input`
  width: 80%;
  height: 80px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed #FFC24B;
  border-radius: 20px;
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
`;

const FormTextArea = styled.textarea`
  width: 80%;
  height: 180px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background: #FFFFFF;
  border-bottom: 2px dashed #FFC24B;
  border-radius: 20px;

  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: #FFC24B;
`;

const SubButton = styled.button`
  width: 80%;
  height: 80px;
  padding: 0.8rem;
  margin: 5% auto 0 auto;
  background: #ffc24b;
  border: none;
  border-radius: 2rem;
  text-align: center;
  
  font-family: 'Autour One';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #FFFFFF;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  margin: 2rem;
  background: #FFFFFF;
  border: 3px dashed #1697A6;
  border-radius: 50px;
`;

function ContactForm() {
  return (
      <>
        <FormTitle>Contact Us</FormTitle>
        <FormContainer>
          <FormStyled>        
            <Title>Your name:</Title>
            <FormInput type="text"/>
            <Title>Your email:</Title>
            <FormInput type="email"/>
            <Title>Your message:</Title>
            <FormTextArea/>
            <SubButton type="submit">Send</SubButton>
          </FormStyled>
          <ImageContainer>
            {/* <Map center={[51.505, -0.09]} zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map> */}
          </ImageContainer>
        </FormContainer>
      </>
  );
}

export default ContactForm;
