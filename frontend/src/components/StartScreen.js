import React from "react";
// import { Link } from 'react-router-dom';
import { Container, MainHeading } from '../styles/GlobalStyle';
// import { HeroSection, HeroText } from '../styles/GlobalStyle';
import { HeroImage, HeroSection, HeroText } from '../styles/GlobalStyle';
import backgroundImage from "../assets/background-image1.jpg";

const StartScreen = () => {
	return (
		<HeroSection>
			{/* <HeroImage img src="" /> */}
		<HeroImage><img src={backgroundImage} alt="backgroundImg" /> </HeroImage>
		<Container>
			<MainHeading>Welcome to Astronomy Community</MainHeading>
			<HeroText>
			“Sometimes you have to go up really high to understand how small you really are.”
			</HeroText>
			<HeroText>— Felix Baumgartner</HeroText>
		</Container>
	</HeroSection>
	);
};

export default StartScreen;