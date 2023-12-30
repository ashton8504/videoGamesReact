import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #060f0a;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  text-align: center;
  padding: 10px 0;
  font-family: "RetroFont", sans-serif;
  position: relative;

  &:hover {
    .social-links {
      opacity: 1;
      visibility: visible;
    }

    .controller-img {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const StyledFooterImage = styled.img`
  height: 150px;
  width: 150px;
  filter: invert(80%) hue-rotate(180deg);
  transition: filter 0.3s ease;
`;

const StyledSocialLink = styled.a`
  margin: 0 10px;
  filter: invert(80%) hue-rotate(180deg);
  transition: filter 0.3s ease;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);

  &:hover {
    filter: none;
    filter: invert(20%) hue-rotate(180deg);
  }
`;

const StyledFooterHeader = styled.h4`
  font-family: "RetroFont", sans-serif;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterImage
        src="imgs/nintendo-controller.svg"
        alt="Nintendo Controller"
        className="controller-img"
      />
      <StyledSocial className="social-links">
        <StyledSocialLink href="https://github.com/ashton8504" target="_blank">
          <img src="imgs/github.svg" alt="Github" width="50" height="50" />
        </StyledSocialLink>
        <StyledSocialLink
          href="https://www.linkedin.com/in/ashton-codes/"
          target="_blank"
        >
          <img src="imgs/linkedin.svg" alt="LinkedIn" width="55" height="55" />
        </StyledSocialLink>
      </StyledSocial>
      <StyledFooterHeader>Know Your Roots Inc.</StyledFooterHeader>
    </StyledFooter>
  );
}
