import React from "react";
import background from "../assets/background-image.jpg";
// import { Container } from '../styles/GlobalStyle'

const StartScreen = () => {
	return (
		
		<div className="outer-wrapper">
		<div className="inner-wrapper">
		<div style={{
			backgroundImage: `url(${background})`,
			height: '100vh',
			marginTop: '-70px',
			fontSize: '50px',
			color: 	'#FFFFFF',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		}}>
			<h1>Hello my friend, Welcome to Nasa Library</h1>
		</div>
		</div>
		</div>
		
	);
};

export default StartScreen;