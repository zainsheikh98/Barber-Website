import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FooterContainer, Heading, IconWrapper } from "./FooterElements";
import { Icon } from "../Header/HeaderElements";
const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Heading>Connect With US On</Heading>
      <IconWrapper>
        <Icon color={"blue"} icon={AiOutlineLinkedin} size={"1.7rem"} />
        <Icon color={"purple"} icon={AiOutlineInstagram} size={"1.7rem"} />
        <Icon color={"blue"} icon={AiOutlineFacebook} size={"1.7rem"} />
        <Icon color={"green"} icon={AiOutlineWhatsApp} size={"1.7rem"} />
        <Icon color={"blue"} icon={AiOutlineTwitter} size={"1.7rem"} />
        <Icon color={"red"} icon={AiOutlineYoutube} size={"1.7rem"} />
      </IconWrapper>
      <p>All Rights Reserved. © 2021</p>
    </FooterContainer>
  );
};

export default Footer;
