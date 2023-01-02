import React from "react";
import Image from "../assets/about.png";
import styled from "styled-components";
import { Title, MainContainer } from "../styles/GlobalStyle";

const About = () => {
  return (
    <	MainContainer>
      <Title>
        The purpose of our page is the investigation of the Sun, the Moon, and the heavens.
      </Title>
      <AboutSubContainer>
        <Paragraph>Here is Naghmeh in Coyoto Head Nebula</Paragraph>
        <AboutImage>
				<img src={Image} alt="backgroundImg" /> 
        </AboutImage>
      </AboutSubContainer>
      <AboutSubContainer>
        <Paragraph>Here is Antonella  ......</Paragraph> 
        <AboutImage>
          <img src={Image} alt="backgroundImg" />
        </AboutImage>
      </AboutSubContainer>
			</ MainContainer>
  );
};

export default About;


export const AboutSubContainer = styled.div`
  /* border: 1px solid #ccc; */
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
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: #7f8c9b;
  line-height: 150%;
`;
