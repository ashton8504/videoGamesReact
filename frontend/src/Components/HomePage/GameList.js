import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 7rem;
`;

const StyledText = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "RetroFont", sans-serif;
  border-bottom: 2px solid lightblue;
  max-width: 80%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 5px;
  margin: 1rem;
  border: 3px solid antiquewhite;
  padding: 1rem;
  background-color: black;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledInput = styled.input`
  width: 80%;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 2px solid lightblue;
  padding: 0.5rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledButton = styled.button`
  width: 60%;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 2px solid dodgerblue;
  padding: 0.5rem;
  background-color: dodgerblue;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4da6ff;
  }
`;

const StyledListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  border: 1px solid antiquewhite;
  border-radius: 5px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: "RetroFont", sans-serif;
  font-size: 1.2rem;
  color: #000;
`;

const StyledGameListHeader = styled.h2`
  font-family: "RetroFont", sans-serif;
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const StyledListItems = styled.li`
  font-family: "RetroFont", sans-serif;
  font-size: 1.2rem;
  color: white;
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  margin-bottom: 0.5rem;
`;

const StyledBorderBottom = styled.hr`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 0.9rem;
`;

const StyledDeleteButton = styled.button`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
  background-color: dodgerblue;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff0000;
  }
`;

export default function GameList() {
  const [newGame, setNewGame] = useState("");
  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    setNewGame(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGame.trim() !== "") {
      setGames((prevGames) => [...prevGames, newGame]);
      setNewGame("");
    }
  };

  const handleDelete = (e) => {
    const gameToDelete = e.target.value;
    setGames((prevGames) => prevGames.filter((game) => game !== gameToDelete));
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledText> List</StyledText>
        <StyledInput
          type="text"
          name="newGame"
          value={newGame}
          onChange={handleInputChange}
          placeholder="Add Games..."
        />
        <StyledButton type="submit">Add</StyledButton>

        {games.length > 0 && (
          <StyledListContainer>
            <StyledGameListHeader>Games:</StyledGameListHeader>
            <StyledList>
              {games.map((game) => (
                <StyledListItems key={game}>
                  {game}
                  <StyledBorderBottom />
                  <StyledDeleteButton
                    type="button"
                    value={game}
                    onClick={handleDelete}
                  >
                    Delete
                  </StyledDeleteButton>
                </StyledListItems>
              ))}
            </StyledList>
          </StyledListContainer>
        )}
      </StyledForm>
    </StyledContainer>
  );
}
