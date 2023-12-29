// Home.js
import React from "react";
import styled from "styled-components";
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CharacterList from "./Components/CharacterCard";
import VideoGameList from "./Components/VideoGameCard";
import GameList from "./Components/GameList";

// Styled Components (if needed)
const PageContent = styled.div`
  background-color: #ffffcc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.h1`
  font-size: 3rem;
  color: dodgerblue;
  text-align: center;
  margin-top: 5rem;
  font-family: "RetroFont", sans-serif;
`;

const Divider = styled.hr`
  width: 70%;
  border: 2px solid red;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <div className="Home">
      <CustomNavbar />
      <PageContent>
        <SectionHeader>Favorite Characters</SectionHeader>
        <Divider />
        <CharacterList />
        <SectionHeader>Favorite Video Games</SectionHeader>
        <Divider />
        <VideoGameList />
        <SectionHeader>Game List</SectionHeader>
        <Divider />
        <GameList />
      </PageContent>
      <Footer />
    </div>
  );
}

export default Home;
