import React, { useState } from "react";
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
  background-color: black;
  border: 1px solid antiquewhite;
  width: 20%;
  height: 200px;
  resize: vertical;
  font-family: "RetroFont", sans-serif;
  color: white;
  &:focus {
    outline: none;
    border-color: hsl(154, 84%, 70%);
  }
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
  width: 15%;
  max-width: 200px;
  resize: vertical;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;
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

      const newMemoryMessage = response.data.memory.trim();
      if (newMemoryMessage) {
        setMemories((prevMemories) => [
          ...prevMemories,
          { message: newMemoryMessage },
        ]);
      } else {
        console.error("Received empty memory from the server.");
      }

      setNewMemory("");
      setIsLeavingMemory(false);
    } catch (error) {
      console.error("Error posting memory:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setNewMemory((prevMemory) => prevMemory + "\n");
    } else if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleStartLeavingMemory = () => {
    setIsLeavingMemory(true);
  };

  const handleDeleteMemory = (index) => {
    console.log("Deleting index", index);

    const updatedMemories = memories.filter((_, i) => {
      const shouldKeep = i !== index && memories[i].message.trim() !== "";
      console.log(`Index ${i}, Should keep? ${shouldKeep}`);
      return shouldKeep;
    });

    console.log("Updated memories", updatedMemories);
    setMemories(updatedMemories);
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
              placeholder="Leave a memory..."
            />
            <StyledButton type="submit">Submit</StyledButton>
          </>
        )}
        {memories.length > 0 && !isLeavingMemory && (
          <MemoryDisplay memories={memories} onDelete={handleDeleteMemory} />
        )}
      </StyledForm>
      <StyledLine />
    </Container>
  );
}
