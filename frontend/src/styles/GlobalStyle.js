import styled from "styled-components/macro";
import { Link } from "react-router-dom";


//Not-found text css
export const Title = styled.h1`
font-size: 40px;
text-transform: uppercase;
/* font-family: 'Dongle'; */
color: #80000E;
`

//Navbar css
export const NavbarContainer = styled.nav`
  width: 100%;
	//grab all the props that were passing to this component by creating a function and send a props
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #2B3A55;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const CustomLink = styled(Link)`
  color: white;
  /* font-size: x-large; */
  /* font-family: Arial, Helvetica, sans-serif; */
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  /* font-size: x-large; */
  /* font-family: Arial, Helvetica, sans-serif; */
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 6px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
	//Added media query to show 3lines just in 700px
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;


//----StartScreen css----//
export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const HeroSection = styled.section`
	height: 200vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroImage = styled.div`
	object-fit: cover;
	/* align-items: center;
  background-size: cover;
  background-repeat: no-repeat; */
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;

//-----Footer Css-----//
export const FooterText = styled.div`
	color: white;
	background-color: #101522;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;
	@media (max-width: 700px) {
		margin-left: 0px;
		text-align: center;
		margin-right: 1rem;
		margin: 0.4rem auto 0.4rem;
	}
`;
