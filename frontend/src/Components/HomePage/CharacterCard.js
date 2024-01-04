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
  max-width: 80%;
`;

const StyledCharacter = styled(Character)`
  margin: 0 auto;
`;

export default function CharacterCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <CenteredCarousel>
      <StyledCol>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          interval={2000}
        >
          {videoGameCharacters.map((character) => (
            <Carousel.Item key={character.name}>
              <StyledCharacter character={character} />
            </Carousel.Item>
          ))}
        </Carousel>
      </StyledCol>
    </CenteredCarousel>
  );
}
