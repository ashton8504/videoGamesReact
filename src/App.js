import React from "react";
import styled from "styled-components";
import CustomNavbar from "./Components/Navbar";
import CharacterList from "./Components/CharacterCard";
import VideoGameList from "./Components/VideoGameCard";
import Footer from "./Components/Footer";
import GameList from "./Components/GameList";

// Styled Components
const AddWrapper = styled.div`
  background-color: #ffffcc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: dodgerblue;
  text-align: center;
  margin-top: 5rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledLineOne = styled.hr`
  width: 70%;
  border: 2px solid red;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const StyledLine = styled.hr`
  width: 40%;
  border: 2px solid red;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

function App() {
  return (
    <div className="App">
      <AddWrapper>
        <CustomNavbar />
        <StyledHeader>Favorite Characters</StyledHeader>
        <StyledLineOne />
        <CharacterList />
        <StyledHeader>Favorite Video Games</StyledHeader>
        <StyledLineOne />
        <VideoGameList />
        <StyledHeader>Game List</StyledHeader>
        <StyledLine />
        <GameList />
        <Footer />
      </AddWrapper>
    </div>
  );
}

export default App;
