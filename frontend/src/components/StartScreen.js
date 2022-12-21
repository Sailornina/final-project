import React from "react";
// import video from "../assets/video.mp4"
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
		</StartContainer>
	</HeroSection>
	);
};

export default StartScreen;