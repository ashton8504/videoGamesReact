import styled from "styled-components";

const MemoryContainer = styled.div`
  background-color: #050e09;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 4rem !important;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 2px solid antiquewhite;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MemoryText = styled.p`
  font-size: 1.5rem;
  font-family: "RetroFont", sans-serif;
  font-family: "RetroFont", sans-serif;
  color: hsl(154, 84%, 70%);
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

const DeleteButton = styled.button`
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  border: none;
  font-family: "RetroFont", sans-serif;
  width: 60%;
  color: black;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #ff6961;
  }
`;

export default function MemoryDisplay({ memories, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <StyledH2>Submitted Memories</StyledH2>
      <div>
        {memories.map((memory, index) => (
          <MemoryContainer key={index}>
            <MemoryText>{memory && memory.message}</MemoryText>
            <DeleteButton onClick={() => handleDelete(index)}>
              Delete
            </DeleteButton>
          </MemoryContainer>
        ))}
      </div>
    </div>
  );
}
