import React from "react";
import Image1 from "../assets/About.jpg";
import Image2 from "../assets/Aboutt.jpg";
import styled from "styled-components";
import { Title, MainContainer } from "../styles/GlobalStyle";
import { ParagraphTitle } from "./community/SpaceCommunicate";

const About = () => {
  return (
    <MainContainer>
      <Title>
        The purpose of our page is the investigation of the Sun, the Moon, and
        the heavens.
      </Title>
      <ParagraphTitle>
        Our aim is to spread interest in astronomy to all those who may never
        have looked through a telescope or realized their place in the cosmos.
      </ParagraphTitle>
      <AboutSubContainer>
        <Paragraph>Here you can find Naghmeh in Coyote Head Nebula</Paragraph>
        <AboutImage>
          <img src={Image1} alt="backgroundImg" />
        </AboutImage>
				<Paragraph>Here you can find Antonella in Thor's Helmet Nebula </Paragraph>
        <AboutImage>
          <img src={Image2} alt="backgroundImg" />
        </AboutImage>
      </AboutSubContainer>
    </MainContainer>
  );
};

export default About;

export const AboutSubContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  width: 100%;
  height: 100%;
  padding: 0px;
  overflow: hidden;
`;

export const AboutImage = styled.div`
  display: flex;
	margin-bottom: 50px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: #7f8c9b;
  line-height: 150%;
`;
