import React from "react";
import background from "../assets/background-image.jpg";
// import { Container } from '../styles/GlobalStyle'

const StartScreen = () => {
	return (
		
		// <div className="outer-wrapper">
		// <div className="inner-wrapper">
		<div style={{
			// background-image: url('./assets/background-image.jpg');
			backgroundImage: `url(${background})`,
			backgroundSize: 'cover',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			width: '100vw',
			// 
			// display: 'flex',
			// height: '100vh',
			// marginTop: '-70px',
			// fontSize: '50px',
			// color: 	'#FFFFFF',
			// backgroundSize: 'cover',
			// backgroundRepeat: 'no-repeat',
		}}>
			<h1>Welcome to Astronomy Community</h1>
		</div>
		// </div>
		// </div>
		
	);
};

export default StartScreen;