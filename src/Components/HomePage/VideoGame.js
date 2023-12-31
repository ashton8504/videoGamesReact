import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 370px;
  cursor: pointer;
  height: 530px;
  border-radius: 5px;
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: black;
  border: 3px solid antiquewhite;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  perspective: 1000px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 1rem;
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
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

const StyledControllerImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  visibility: hidden;
  cursor: pointer;
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

export default function VideoGame({ videoGame }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledCard onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
      <StyledImage
        src={`/games/${videoGame.photoName}`}
        alt={videoGame.name}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          visibility: isFlipped ? "hidden" : "visible",
        }}
      />
      <StyledControllerImage
        src={videoGame.controllerImage}
        alt={`${videoGame.company} Controller`}
        style={{
          transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
          visibility: isFlipped ? "visible" : "hidden",
        }}
      />
      <StyledName>{videoGame.name}</StyledName>
      <StyledGame>{videoGame.game}</StyledGame>
      <StyledAbilities>{videoGame.company}</StyledAbilities>
      <StyledAbilities>{videoGame.releaseYear}</StyledAbilities>
    </StyledCard>
  );
}
