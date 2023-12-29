import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% { opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; }
`;

const linesAnimation = keyframes`
  0% { background-position: 0px 0px; }
  50% { background-position: 0px 0px; }
  51% { background-position: 0px 2px; }
  100% { background-position: 0px 2px; }
`;

const StyledContactPage = styled.div`
  background: hsl(154, 50%, 5%);
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  font-family: monospace;
  font-size: 16px;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledPre = styled.pre`
  margin: auto;
  display: table;
  white-space: pre;
`;

const StyledGlare = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: radial-gradient(hsl(154, 5%, 15%) 0%, hsl(154, 50%, 5%) 70%);
`;

const StyledInterlaced = styled.div`
  position: fixed;
  background: repeating-linear-gradient(
    transparent 0px 1px,
    hsla(154, 0%, 0%, 0.3) 3px 4px
  );
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  animation: ${linesAnimation} 0.06666666s linear infinite;
`;

const StyledBlink = styled.span`
  animation: ${blinkAnimation} 0.4s linear infinite;
`;

const StyledGreeting = styled.div`
  pre {
    font-size: 24px;
    margin-top: 20px;
  }
`;

const StyledMessage = styled.div`
  font-size: 24px;
  margin-top: 20px;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const StyledDivider = styled.hr`
  width: 50%;
  border: 1px solid;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column; /* Updated for mobile */
  align-items: flex-start; /* Updated for mobile */

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
`;

const StyledLinks = styled.a`
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  list-style: none;
  margin-bottom: 0.5rem;
  color: #6ee8b4;
  text-decoration: none;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
`;

const StyledNavLink = styled(Link)`
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  list-style: none;
  margin-bottom: 0.5rem;
  color: #6ee8b4;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  height: 600px;
  border-radius: 5px;
  border: 2px solid lightblue;
  display: block;
  margin: 5rem auto 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 2rem;
  }
`;

const StyledImageContainer = styled.div`
  border-radius: 5px;
  padding-bottom: 6rem;
`;

const StyleImageCaption = styled.p`
  font-family: "RetroFont", sans-serif;
  color: #6ee8b4;
  text-align: center;
  margin-top: 1rem;
`;

const StyledAsciiArt = styled.pre`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledHelloWorld = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-family: "RetroFont", sans-serif;
    font-size: 50px;
    text-align: center;
    margin-top: 20px;
  }
`;
export default function ContactPage() {
  const asciiArt = `
   _    _      _ _        __          __        _     _ 
  | |  | |    | | |       \\ \\        / /       | |   | |
  | |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
  |  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _' |
  | |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
  |_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|

  I'm Ashton... 
`;

  return (
    <StyledContactPage>
      <StyledPre>
        <StyledGreeting>
          <StyledAsciiArt>{asciiArt}</StyledAsciiArt>
          <StyledHelloWorld>Hello World</StyledHelloWorld>
          <StyledMessage>
            <StyledDivider />
            <p>
              &gt;<StyledBlink>_ Say Hello:</StyledBlink>
            </p>

            <StyledList>
              <li>
                <StyledLinks
                  href="https://ashton-codes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Portfolio"
                >
                  Portfolio
                </StyledLinks>
              </li>
              <li>
                <StyledLinks
                  href="https://github.com/ashton8504"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="GitHub"
                >
                  GitHub
                </StyledLinks>
              </li>
              <li>
                <StyledLinks
                  href="https://www.linkedin.com/in/ashton-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="LinkedIn"
                >
                  LinkedIn
                </StyledLinks>
              </li>
              <li>
                <StyledLinks
                  href="mailto:ashtoncodes8504@gmail.com"
                  alt="Contact"
                >
                  Contact
                </StyledLinks>
              </li>
              <li>
                <StyledLinks>
                  <StyledNavLink to="/">Go back to Home</StyledNavLink>
                </StyledLinks>
              </li>
            </StyledList>
          </StyledMessage>
        </StyledGreeting>
      </StyledPre>
      <StyledInterlaced />
      <StyledGlare />
      <StyledImageContainer>
        <StyledImage src="imgs/games.jpg" alt="Photo of video games" />
        <StyleImageCaption>
          "Hanging out down the street, coding something I need to complete."
        </StyleImageCaption>
      </StyledImageContainer>
    </StyledContactPage>
  );
}
