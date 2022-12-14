import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/notFound.png";
import styled from "styled-components";
import { BackgroundImage } from "../styles/GlobalStyle";
import Image404 from "../assets/404.jpg";
import Goback from "../assets/goBack.png";

const NotFound = () => {
  return (
    <>
      <BackgroundImage>
        <img src={Image404} alt="backgroundImg" />{" "}
      </BackgroundImage>
      <Link to="/login">
        <ImageBack>
          <img src={Goback} alt="Goback" /> Go back to Login{" "}
        </ImageBack>
      </Link>
      <Title404>404_</Title404>
      <Title404>YOU'RE BEYOND THE BORDERS!</Title404>
      <Image>
        <img src={notFoundImage} alt="notFoundImg" />{" "}
      </Image>
    </>
  );
};

export default NotFound;

export const Title404 = styled.h1`
  display: flex;
  margin: 0 auto;
  font-size: 20px;
  color: #8b0000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  padding: 20px;
  @media (max-width: 700px) {
    margin-top: 90px;
    padding: 80px;
    font-size: 50px;
  }
`;

export const Image = styled.div`
  display: flex;
  margin: 0 auto;
  color: #191970;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 10%;
  padding: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ImageBack = styled.div`
  width: 26px;
  filter: invert(100%) sepia(18%) saturate(351%) hue-rotate(149deg)
    brightness(100%) contrast(95%);
  position: absolute;
  display: inline-flex;
  color: grey;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  left: 2rem;
  top: 6rem;
`;
