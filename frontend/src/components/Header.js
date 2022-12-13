import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Link to="/login">Login</Link>
			<p>Nasa API</p>
		</div>
	)
}

export default Header;