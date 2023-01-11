import React from "react";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import styled from "styled-components/macro";
import { StartLink, LinkWrapper } from "../styles/GlobalStyle";
import { StartContainer, MainHeading } from "../styles/GlobalStyle";
import { HeroImage, HeroSection, HeroText } from "../styles/GlobalStyle";
import backgroundImage from "../assets/background-img.jpg";
import scrollIcon from "../assets/scrollD.png";
import { Link } from "react-router-dom";
import { Paragraph } from "./About";

const StartScreen = () => {
  return (
    <HeroSection>
      <HeroImage>
        <img src={backgroundImage} alt="backgroundImg" />
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
					<a href="#section2"><ScrollImage className="scroll" src={scrollIcon} alt="scrollImg"></ScrollImage></a>
          <StartLink to="/login">Sign in</StartLink>
        </LinkWrapper>
				<YouTubeHeading  id="section2">
        <YouTubeParagraph>
          Best Space Movies -{" "}
          <a
            href="https://www.marieclaire.com/culture/g31006874/best-space-movies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            of All Time
          </a>
          <Paragraph>Interstellar Official Soundtrack</Paragraph>
        </YouTubeParagraph>
        <YouTubeWrapper>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=EOK6_cX35QM&list=RDYF1eYbfbH5k&index=13"
            width="100%"
            height="100%"
          />
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
  align-items: center;
  justify-content: center;
  margin-top: 300px;
	
  &.react-player {
    position: absolute;
    top: 0;
    left: 0;
	}

	#section2 {
		scroll-behavior: smooth;
	}

    @media (max-width: 667px) {
      position: relative;
      padding-top: 56.25%;
			margin-top: 100px;
    }

`;

export const YouTubeWrapper = styled.div`
   justify-content: center;
`;

export const YouTubeParagraph = styled.div`
  color: #ffffff;
	padding: 20px;
  justify-content: center;
  align-items: center;

  & a {
    color: white;
  }

  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

export const YoutubeLink = styled(Link)`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const ScrollImage = styled.img`
    width: 40px;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

		&.scroll:hover{
			transform: scale(1.5); 
		}
`;


