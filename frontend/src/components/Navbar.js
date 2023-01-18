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
            <CustomLink to="/profile">
              {" "}
              <span role="img" aria-labelledby="alien">
                👽
              </span>
            </CustomLink>
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
          <Logo src={LogoImg} alt="logo"></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
            to="/"
          >
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
            to="/about"
          >
            {" "}
            About
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
            to="/profile"
          >
            {" "}
            <span role="img" aria-labelledby="alien">
              👽
            </span>
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
