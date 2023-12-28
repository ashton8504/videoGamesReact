import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-family: "RetroFont", sans-serif;
`;

const StyledFooterImage = styled.img`
  height: 50px;
  width: 50px;
  filter: invert(80%) hue-rotate(180deg);
`;

const StyledFooterHeader = styled.h4`
  font-family: "RetroFont", sans-serif;
`;

export default function Footer() {
  return (
    <div>
      <div>
        <StyledFooter>
          <StyledFooterHeader>Know Your Roots Inc.</StyledFooterHeader>
          <StyledFooterImage
            src="imgs/nintendo-controller.svg"
            alt="Nintendo Controller"
          />
        </StyledFooter>
      </div>
    </div>
  );
}
