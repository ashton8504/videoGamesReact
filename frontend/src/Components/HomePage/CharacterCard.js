import React from "react";
import styled from "styled-components";
import Character from "./Character";
import videoGameCharacters from "../../data/videoGameCharacters";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function CharacterList() {
  return (
    <StyledList>
      {videoGameCharacters.map((character) => (
        <Character key={character.name} Character={character} />
      ))}
    </StyledList>
  );
}
