import styled from "styled-components";

const StyledLi = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  list-style-type: none;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
  font-family: "RetroFont", sans-serif;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
`;

export default function MemoryDisplay({ memories }) {
  return (
    <div>
      <StyledH2>Submitted Memories</StyledH2>
      <div>
        <ul>
          {memories &&
            memories.map((memory, index) => {
              console.log("Memory message:", memory && memory.message);
              return (
                <StyledLi key={index}>{memory && memory.message}</StyledLi>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
