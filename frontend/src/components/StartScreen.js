import React from "react";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import { StartLink, LinkWrapper } from "../styles/GlobalStyle";
import { StartContainer, MainHeading } from "../styles/GlobalStyle";
import { HeroImage, HeroSection, HeroText } from "../styles/GlobalStyle";
import backgroundImage from "../assets/background-image1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StartScreen = () => {
  return (
    <HeroSection>
      <HeroImage>
        <img src={backgroundImage} alt="backgroundImg" />{" "}
      </HeroImage>
      <StartContainer>
        <MainHeading>Welcome to Astronomy Community</MainHeading>
        <HeroText>
          “Sometimes you have to go up really high to understand how small you
          really are.”
        </HeroText>
        <HeroText>— Felix Baumgartner</HeroText>
        <LinkWrapper>
          <StartLink to="/register">Register</StartLink>
          <StartLink to="/login">Sign in</StartLink>
        </LinkWrapper>
        <YouTubeHeading>
          <YouTubeParagraph>
            Best Space Movies -{" "}
            <a
              href="https://www.marieclaire.com/culture/g31006874/best-space-movies/"
              target="_blank" rel="noopener noreferrer"
            >
              of All Time
            </a>
          </YouTubeParagraph>
          <YouTubeWrapper>
            <ReactPlayer url="https://www.youtube.com/watch?v=EOK6_cX35QM&list=RDYF1eYbfbH5k&index=13" />
          </YouTubeWrapper>
        </YouTubeHeading>
      </StartContainer>
      <Footer />
    </HeroSection>
  );
};

export default StartScreen;

export const YouTubeHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
  }
`;

export const YouTubeWrapper = styled.div`
  @media (max-width: 667px) {
  }
`;

export const YouTubeParagraph = styled.div`
  color: #ffffff;
  justify-content: center;
  align-items: center;

  & a {
    color: white;
  }
`;

export const YoutubeLink = styled(Link)`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;
