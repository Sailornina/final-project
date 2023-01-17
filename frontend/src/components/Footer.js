import React from "react";
import styled from "styled-components";
import { FooterText } from "../styles/GlobalStyle";

const Footer = () => {
  return (
    <FooterText>@ Created by <LinkProfile href="https://www.linkedin.com/in/antonella-cardozo-187562b7/">Antonella Cardozo</LinkProfile> and <LinkProfile href="https://www.linkedin.com/in/naghmeh-okhovat-92508378/"> Naghmeh Okhovat.</LinkProfile></FooterText>
  );
};

export default Footer;

export const LinkProfile = styled.a`
color: white;
`;
