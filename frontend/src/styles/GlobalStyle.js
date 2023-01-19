import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

//----Navbar css----//
export const NavbarContainer = styled.nav`
  width: 100%;
  //grab all the props that were passing to this component by creating a function and send a props
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #0005;
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
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  filter: invert(100%) sepia(18%) saturate(351%) hue-rotate(149deg)
    brightness(100%) contrast(95%);
  margin: 1px;
  max-width: 180px;
  height: auto;
  padding: 3%;
  @media (max-width: 667px) {
    padding: 11%;
  }
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
export const StartContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const HeroSection = styled.section`
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroImage = styled.div`
  background-size: 100vw 100vh;
  right: 0;
  top: 0;
  position: absolute;
  opacity: 80%;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  color: #000000;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 2rem;
`;

export const StartLink = styled(Link)`
  color: black;
  border: 10px solid #5f9ea0;
  background-color: #5f9ea0;
  font-size: clamp(0.5rem, 1vw, 1.3rem);
  line-height: 24px;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;

//----Profile CSS----//
export const ProfileLink = styled(Link)`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin: auto;
`;

export const MainContainer = styled.div`
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
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-size: 40px;
  color: #2f4f4f;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

//----Register/Login css----//
export const Main = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 600px;
  height: 700px;
  border-radius: 10px;
  padding: 40px 30px;
  margin-top: 5px;
  box-shadow: -3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671);
  @media (max-width: 667px) {
    width: 300px;
    height: 800px;
    padding: 10px 0px;
    justify-content: center;
    flex-direction: column;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  text-align: center;
  z-index: -1;
  width: 390px;
  height: 526px;
  left: -326px;
  top: -80px;
`;

export const Form = styled.form`
  color: #fff;
  display: flex;
  z-index: 1;
  align-items: center;
  line-height: 80px;
  justify-content: center;
  flex-direction: column;
  height: 600px;
  width: 100%;
  display: flex;
  position: relative;
  text-align: center;
  @media (max-width: 667px) {
    width: 300px;
    height: 650px;
  }
`;

export const Label = styled.h1`
  display: flex;
  color: #fff;
  font-size: 20px;
  padding: 20px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #2b3a55;
  background-color: #2b3a55;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 10%;
`;

//-----Footer Css-----//
export const FooterText = styled.div`
  color: white;
  background-color: #101522;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 2;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  @media (max-width: 700px) {
    margin-left: 0px;
    text-align: center;
    margin-right: 1rem;
    margin: 0.4rem auto 0.4rem;
  }
`;

export default GlobalStyle;
