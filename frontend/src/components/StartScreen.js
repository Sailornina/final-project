import React from "react";
import Footer from "../components/Footer";
// import video from "../assets/video.mp4"
import { StartLink, LinkWrapper } from "../styles/GlobalStyle";
import { StartContainer, MainHeading } from '../styles/GlobalStyle';
import { HeroImage, HeroSection, HeroText } from '../styles/GlobalStyle';
import backgroundImage from "../assets/background-image1.jpg";


const StartScreen = () => {
	return (
		<HeroSection>
		{/* <HeroVideo src={video} controls="controls" autoplay="true" />  */}
		<HeroImage><img src={backgroundImage} alt="backgroundImg" /> </HeroImage>
		<StartContainer>
			<MainHeading>Welcome to Astronomy Community</MainHeading>
			<HeroText>
			“Sometimes you have to go up really high to understand how small you really are.”
			</HeroText>
			<HeroText>— Felix Baumgartner</HeroText>
			<LinkWrapper>
			<StartLink to="/register">Register</StartLink>
			<StartLink to="/login">Sign in</StartLink>
			</LinkWrapper>
		</StartContainer>
		<Footer /> 
	</HeroSection>
	);
};

export default StartScreen; 