// import React from "react";
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/" className="site-title">Nasa API</Link>
			<ul>
				<CustomLink to="register">Register</CustomLink>
				<CustomLink to="login">Login</CustomLink>
				<CustomLink to="about">About</CustomLink>
			</ul>
		</nav>
	)
};

export default Navbar;

const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}