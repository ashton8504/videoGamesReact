import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";
import styled from "styled-components";
import Character from "./Character";
import videoGameCharacters from "../../data/videoGameCharacters";

const CenteredCarousel = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCol = styled(Col)`
  max-width: 80%; /* Adjust width as needed */
`;

const StyledCharacter = styled(Character)`
  margin: 0 auto;
`;

export default function CharacterCarousel() {
  //Feature is not currently working
  const [pauseCarousel, setPauseCarousel] = useState(false);

  return (
    <CenteredCarousel>
      <StyledCol>
        <Carousel controls={false} interval={2000} pause={pauseCarousel}>
          {videoGameCharacters.map((character) => (
            <Carousel.Item key={character.name}>
              <StyledCharacter
                pauseCarousel={pauseCarousel}
                setPauseCarousel={setPauseCarousel}
                character={character}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </StyledCol>
    </CenteredCarousel>
  );
}
