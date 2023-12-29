import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-family: "RetroFont", sans-serif;
  padding-left: 15px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  margin-top: 3px;
  font-family: "RetroFont", sans-serif;
  font-size: 1.2rem;
  ${"" /* border: 2px solid pink; */}
`;

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <StyledNavbarBrand>
          Memorable Characters, Timeless Games
        </StyledNavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <StyledNavLink exact to="/" activeClassName="active">
              Home
            </StyledNavLink>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Gaming Origins
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
