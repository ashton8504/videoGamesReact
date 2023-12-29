import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 300px;
  height: 500px;
  border: 2px solid pink;
  border-radius: 5px;
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f2f2f2;
  box-shadow: 3px 3px 3px 3px #d3d3d3;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 5px 5px #d3d3d3;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 2px solid lightblue;
`;

const StyledName = styled.h3`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
  border-bottom: 2px solid lightblue;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #1e90ff;
`;

const StyledGame = styled.h4`
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledAbilities = styled.p`
  font-size: 1rem;
  color: #000;
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
