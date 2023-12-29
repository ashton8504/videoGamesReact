import React from "react";
import styled, { keyframes } from "styled-components";

const StyledAsciiArt = styled.div`
  font-family: monospace;
  font-size: 16px;
  position: relative;
  min-height: 100vh;
`;

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
    font-size: 24px; /* Adjust the font size */
    margin-top: 20px; /* Add margin-top */
  }
`;

const StyledMessage = styled.div`
  font-size: 24px;
  margin-top: 20px;
  margin-left: 30px;
`;

export default function ContactPage() {
  const asciiArt = `
   _    _      _ _        __          __        _     _ 
  | |  | |    | | |       \\ \\        / /       | |   | |
  | |__| | ___| | | ___    \\ \\  /\\  / /__  _ __| | __| |
  |  __  |/ _ \\ | |/ _ \\    \\ \\/  \\/ / _ \\| '__| |/ _' |
  | |  | |  __/ | | (_) |    \\  /\\  / (_) | |  | | (_| |
  |_|  |_|\\___|_|_|\\___/      \\/  \\/ \\___/|_|  |_|\\__,_|
`;

  return (
    <StyledContactPage>
      <StyledPre>
        <StyledGreeting>
          <pre>{asciiArt}</pre>
          <StyledMessage>
            <p>Start a Conversation</p>
            <p>
              &gt;<StyledBlink>_ Say Hello</StyledBlink>
            </p>
          </StyledMessage>
        </StyledGreeting>
      </StyledPre>
      <StyledInterlaced />
      <StyledGlare />
    </StyledContactPage>
  );
}
