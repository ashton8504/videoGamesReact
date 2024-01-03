import React from "react";
import styled, { keyframes } from "styled-components";
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CharacterList from "./Components/HomePage/CharacterCard";
import VideoGameList from "./Components/HomePage/VideoGameCard";
import GameList from "./Components/HomePage/GameList";

//Retro Styles For Terminal
const linesAnimation = keyframes`
  0% { background-position: 0px 0px; }
  50% { background-position: 0px 0px; }
  51% { background-position: 0px 2px; }
  100% { background-position: 0px 2px; }
`;

const StyledContactPage = styled.div`
  background: hsl(154, 50%, 5%);
  color: hsl(154, 84%, 70%);

  font-family: monospace;
  font-size: 16px;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

const PageContent = styled.div`
  background-color: #060f0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h1`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-top: 5rem;
  font-family: "RetroFont", sans-serif;
`;

const Divider = styled.hr`
  width: 40%;
  border: 2px solid antiquewhite;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const Divider2 = styled.hr`
  width: 20%;
  border: 2px solid antiquewhite;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <div className="Home">
      <CustomNavbar />
      <StyledContactPage>
        <PageContent>
          <SectionHeader>Favorite Characters</SectionHeader>
          <Divider />
          <CharacterList />
          <SectionHeader>Favorite Video Games</SectionHeader>
          <Divider />
          <VideoGameList />
          <SectionHeader>Game List</SectionHeader>
          <Divider2 />
          <GameList />
        </PageContent>
        <StyledInterlaced />
      </StyledContactPage>
      <Footer />
    </div>
  );
}
