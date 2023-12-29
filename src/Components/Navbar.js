import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-top: 7.5px;
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  margin-right: 1.3rem;

  /* Adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.3rem;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  color: white;
  font-size: 1.6rem;
  font-family: "RetroFont", sans-serif;
  margin-right: 4.5rem;

  /* Adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 4.5rem;
  }
`;

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <StyledNavbarBrand>
          Memorable Characters, Timeless Games
        </StyledNavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <StyledNavLink exact to="/" activeClassName="active">
              Home
            </StyledNavLink>
            <StyledNavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Gaming Origins
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
            </StyledNavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
