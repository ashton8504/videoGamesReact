// Home.js
import React from "react";
import styled from "styled-components";
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CharacterList from "./Components/HomePage/CharacterCard";
import VideoGameList from "./Components/HomePage/VideoGameCard";
import GameList from "./Components/HomePage/GameList";

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
  width: 40%;
  border: 2px solid red;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const Divider2 = styled.hr`
  width: 20%;
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
        <Divider2 />
        <GameList />
      </PageContent>
      <Footer />
    </div>
  );
}

export default Home;
