import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

// Styled Components

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-family: "RetroFont", sans-serif;
  margin-left: 3rem;

  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <StyledNavbarBrand>
        Memorable Characters, Timeless Games
      </StyledNavbarBrand>
    </Navbar>
  );
}
