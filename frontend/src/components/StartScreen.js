import React from "react";
import background from "../assets/background-image.jpg";
// import { Container } from '../styles/GlobalStyle'

const StartScreen = () => {
	return (
		
		<div style={{
			backgroundImage: `url(${background})`,
			height: '100vh',
			marginTop: '-70px',
			fontSize: '50px',
			color: 	'#FFFFFF',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		}}>
			<h1>Hello, Welcome to Nasa Library</h1>
		</div>
		
	);
}

export default StartScreen;