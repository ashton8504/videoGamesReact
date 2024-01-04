import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 300px;
  height: 480px;
  border-radius: 10px;
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: black;
  border: 3px solid antiquewhite;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const StyledName = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
  border-bottom: 2px solid lightblue;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
`;

const StyledGame = styled.h4`
  font-size: 1.2rem;
  color: white;
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  text-align: center;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledAbilities = styled.p`
  font-size: 1rem;
  color: white;
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  text-align: center;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
`;

export default function Character({ Character }) {
  return (
    <StyledCard>
      <StyledImage
        src={`/characters/${Character.photoName}`}
        alt={Character.name}
      />
      <StyledName>{Character.name}</StyledName>
      <StyledGame>{Character.game}</StyledGame>
      <StyledAbilities>{Character.abilities}</StyledAbilities>
    </StyledCard>
  );
}
