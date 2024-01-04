import React, { useState, useEf } from "react";
import axios from "axios";
import styled from "styled-components";
import MemoryDisplay from "./MemoryDisplay";

// Styled Components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 4rem;
`;

const StyledLabel = styled.label`
  font-size: 2.5rem;
  color: hsl(154, 84%, 70%);
  text-shadow: 0 0 4px hsl(154, 84%, 70%);
  margin-bottom: 1rem;
  font-family: "RetroFont", sans-serif;
`;

const StyledTextarea = styled.textarea`
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(154, 84%, 70%);
  width: 20%;
  height: 200px;
  resize: vertical;
  font-family: "RetroFont", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    height: 200px;
    width: 80%;
  }
`;

const StyledLine = styled.hr`
  border: 2px solid hsl(154, 84%, 70%);
  width: 50%;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(154, 84%, 70%);
  width: 15%;
  max-width: 200px;
  resize: vertical;
  color: white;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;
  background-color: dodgerblue;
  transition: background-color 0.3s ease;

  /* Updated mobile styles */
  @media (max-width: 768px) {
    width: 30%;
    max-width: none;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
  &:hover {
    background-color: #4da6ff;
  }
`;

export default function MemoryForm() {
  const [newMemory, setNewMemory] = useState("");
  const [isLeavingMemory, setIsLeavingMemory] = useState(false);
  const [memories, setMemories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/memories", {
        memory: newMemory,
      });

      setNewMemory("");
      setMemories((prevMemories) => [
        ...prevMemories,
        { message: response.data.memory },
      ]);
      setIsLeavingMemory(false);
    } catch (error) {
      console.error("Error posting memory:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleStartLeavingMemory = () => {
    setIsLeavingMemory(true);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        {!isLeavingMemory && (
          <StyledButton onClick={handleStartLeavingMemory}>
            Leave Memory
          </StyledButton>
        )}
        {isLeavingMemory && (
          <>
            <StyledLabel htmlFor="memoryInput">Gaming Memory</StyledLabel>
            <StyledTextarea
              id="memoryInput"
              value={newMemory}
              onChange={(e) => setNewMemory(e.target.value)}
              required
              onKeyDown={handleKeyPress}
            />
            <StyledButton type="submit">Submit</StyledButton>
          </>
        )}
        {memories.length > 0 && !isLeavingMemory && (
          <MemoryDisplay memories={memories} />
        )}
        {memories.length > 0 && !isLeavingMemory}
      </StyledForm>
      <StyledLine />
    </Container>
  );
}
