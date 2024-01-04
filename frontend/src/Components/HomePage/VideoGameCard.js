import React from "react";

import styled from "styled-components";
import VideoGame from "./VideoGame";
import videoGames from "../../data/videoGames";

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export default function VideoGameList() {
  return (
    <StyledList>
      {videoGames.map((videoGame) => (
        <VideoGame key={videoGame.name} videoGame={videoGame} />
      ))}
    </StyledList>
  );
}
