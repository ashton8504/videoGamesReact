import styled from "styled-components";

const MemoryContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 4rem !important;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const MemoryText = styled.p`
  font-size: 1.5rem;
  font-family: "RetroFont", sans-serif;
  color: black;
  margin: 0;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
  text-align: center;
  font-family: "RetroFont", sans-serif;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
`;

export default function MemoryDisplay({ memories, onDelete }) {
  return (
    <div>
      <StyledH2>Submitted Memories</StyledH2>
      <div>
        {memories &&
          memories.map((memory, index) => {
            console.log("Memory message:", memory && memory.message);
            return (
              <MemoryContainer key={index}>
                <MemoryText>{memory && memory.message}</MemoryText>
              </MemoryContainer>
            );
          })}
      </div>
    </div>
  );
}
