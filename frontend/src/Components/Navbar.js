import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Retro Styles For Terminal
const linesAnimation = keyframes`
  0% { background-position: 0px 0px; }
  50% { background-position: 0px 0px; }
  51% { background-position: 0px 2px; }
  100% { background-position: 0px 2px; }
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

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  font-family: "RetroFont", sans-serif;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: hsl(154, 84%, 70%);

  text-decoration: none;
  margin-top: 7.5px;
  font-family: "RetroFont", sans-serif;
  font-size: 1.6rem;
  margin-right: 1.3rem;
`;

const StyledNavDropdown = styled(NavDropdown)`
  .nav-link {
    color: hsl(154, 84%, 70%);

    &:hover,
    &:focus,
    &:active {
      color: #68dbaa;
      background-color: transparent;
    }
  }
  font-size: 1.6rem;
  font-family: "RetroFont", sans-serif;
  margin-right: 4.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

const CustomNavbarContainer = styled.div`
  ${StyledNavbarBrand} {
    &:before {
      content: "Gaming Roots Inc.";
      color: hsl(154, 84%, 70%);
    }
  }
`;

const CustomNav = styled(Nav)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const StyledNavDropdownItem = styled(NavDropdown.Item)`
  font-size: 14px;
  margin-left: 10px;
  font-family: "RetroFont", sans-serif;
  display: block;
`;

export default function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    handleResize();
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: "#060F0A" }}>
      <Container fluid>
        <CustomNavbarContainer>
          <StyledNavbarBrand />
        </CustomNavbarContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleMobileMenu}
          style={{
            border: "1px solid hsl(154, 84%, 70%)",
            backgroundColor: "#68dbaa",
          }}
        />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`justify-content-end${showMenu ? " show" : ""}`}
        >
          <CustomNav>
            <StyledNavLink to="/" activeclassName="active">
              Home
            </StyledNavLink>

            {isMobile ? (
              <>
                <StyledNavLink to="/gaming-origins">
                  Gaming Origins
                </StyledNavLink>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </>
            ) : (
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
            )}
          </CustomNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
