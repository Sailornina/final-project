import React from "react";
import { Link } from "react-router-dom";
import { Title } from '../styles/GlobalStyle';

const NotFound = () => {
	return (
		<>
			<Link to="/login"> GO TO LOGIN</Link>
			<Title>Not-Found... </Title>;
		</>
	)
}

export default NotFound;