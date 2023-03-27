import React from 'react';
import styled from 'styled-components';
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  overflow: hidden;
  font-family: 'Autour One', cursive;
  font-weight: bold;
  color: #f47068;
  box-shadow: 2px 2px 2px 1px #fff4f1;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 70%;
  margin: 2rem;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  align-self: top;
`;

const FormInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #ffb3ae;
`;

const FormTextArea = styled.textarea`
  width: 80%;
  height: 6rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #ffb3ae;
`;

const SubButton = styled.button`
  width: 80%;
  padding: 0.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: #ffc24b;
  border: none;
  border-radius: 2rem;
  text-align: center;
  color: white;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 2rem;
  background: linear-gradient(to right,#fff4f1, #1697a6);
  background-size: cover;
  background-position: center;
`;

function ContactForm() {
  return (
    <FormContainer>
      <FormStyled>
        <FormTitle>Contact Us</FormTitle>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormTextArea placeholder="Message" />
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
  );
}

export default ContactForm;
