import { useState } from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  list-style-type: none;
`;

export default function MemoryDisplay({ memories }) {
  return (
    <div>
      <h2>Submitted Memories</h2>
      <ul>
        {memories &&
          memories.map((memory, index) => {
            console.log("Memory message:", memory && memory.message);
            return <StyledLi key={index}>{memory && memory.message}</StyledLi>;
          })}
      </ul>
    </div>
  );
}
