import React, { useState } from "react";
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarExtendedContainer,
	NavbarInnerContainer,
	NavbarLinkContainer,
	CustomLink,
	Logo,
	OpenLinksButton,
	NavbarLinkExtended,
} from "../styles/GlobalStyle";
import LogoImg from "../assets/Logo.png";

const Navbar = () => {
	//represent the state of the button with boolean false
	const [extendNavbar, setExtendNavbar] = useState(false);
	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<CustomLink to="/">Home</CustomLink>
						<CustomLink to="/about">About</CustomLink>
						{/* <CustomLink to="/register">Register</CustomLink>
						<CustomLink to="/login">Login</CustomLink> */}
						<CustomLink to="/contact us">Contact</CustomLink>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}
						>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<Logo src={LogoImg}></Logo>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}to="/"> Home</NavbarLinkExtended>
					<NavbarLinkExtended onClick={() => {
								setExtendNavbar((curr) => !curr);
							}} to="/about"> About</NavbarLinkExtended>
					{/* <NavbarLinkExtended to="/register"> Register</NavbarLinkExtended>
					<NavbarLinkExtended to="/login"> Login</NavbarLinkExtended> */}
					<NavbarLinkExtended onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}to="/contact"> Contact</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>

	)
};

export default Navbar;

