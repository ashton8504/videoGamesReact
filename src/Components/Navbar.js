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
  color: #060f0a;
  text-decoration: none;
  margin-top: 7.5px;
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  margin-right: 1.3rem;
`;

const StyledNavDropdown = styled(NavDropdown)`
  color: white;
  font-size: 1.6rem;
  font-family: "RetroFont", sans-serif;
  margin-right: 4.5rem;

  /* Adjustments for mobile */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

const CustomNavbarContainer = styled.div`
  @media (max-width: 768px) {
    ${StyledNavbarBrand} {
      &:before {
        content: "Gaming Roots Inc.";
      }
    }
  }
`;

const CustomNav = styled(Nav)`
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const StyledNavDropdownItem = styled(NavDropdown.Item)`
  color: black;
  font-size: 14px;
  margin-left: 10px;
  font-family: "RetroFont", sans-serif;
  display: block;
  &:hover {
    color: #1E90FF; 
`;

<StyledNavDropdown
  title="Menu"
  id="basic-nav-dropdown"
  className="mt-3 mt-sm-0 ml-sm-3"
>
  <StyledNavDropdownItem as={StyledNavLink} to="/gaming-origins">
    Gaming Origins
  </StyledNavDropdownItem>
  <StyledNavDropdownItem as={StyledNavLink} to="/contact">
    Contact
  </StyledNavDropdownItem>
</StyledNavDropdown>;

export default function CustomNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <CustomNavbarContainer>
          <StyledNavbarBrand>
            Memorable Characters, Timeless Games
          </StyledNavbarBrand>
        </CustomNavbarContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <CustomNav>
            <StyledNavLink exact to="/" activeClassName="active">
              Home
            </StyledNavLink>
            <StyledNavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              className="mt-3 mt-sm-0 ml-sm-3"
            >
              <StyledNavDropdownItem as={StyledNavLink} to="/gaming-origins">
                Gaming Origins
              </StyledNavDropdownItem>
              <StyledNavDropdownItem as={StyledNavLink} to="/contact">
                Contact
              </StyledNavDropdownItem>
            </StyledNavDropdown>
          </CustomNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
