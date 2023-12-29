import React from "react";
import styled from "styled-components";
import VideoGame from "./VideoGame";
import videoGames from "../../data/videoGames";

export default function VideoGameList() {
  const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledList>
      {videoGames.map((videoGame) => (
        <VideoGame key={videoGame.name} videoGame={videoGame} />
      ))}
    </StyledList>
  );
}
