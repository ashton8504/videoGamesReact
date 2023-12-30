import React from "react";
import styled from "styled-components";

//Styled Components

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-family: "RetroFont", sans-serif;
  text-align: center;
  margin: 2rem auto;
`;

export default function GamingOrigins() {
  return (
    <StyledHeader>
      <h1>How it all began...</h1>
    </StyledHeader>
  );
}
