import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(154, 84%, 70%);
  width: 50%;
  height: 200px;
  resize: vertical;
  font-family: "RetroFont", sans-serif;
`;

const StyledLine = styled.hr`
  border: 2px solid hsl(154, 84%, 70%);
  width: 50%;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 1px solid hsl(154, 84%, 70%);
  width: 10%;
  resize: vertical;
  color: white;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;
  background-color: dodgerblue;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4da6ff;
  }
`;

export default function MemoryForm() {
  const [newMemory, setNewMemory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/memories", {
        memory: newMemory,
      });
      setNewMemory(""); // Clear the input field after submitting
    } catch (error) {
      console.error("Error posting memory:", error);
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLine />
        <StyledLabel htmlFor="memoryInput">Gaming Memory</StyledLabel>
        <StyledTextarea
          id="memoryInput"
          value={newMemory}
          onChange={(e) => setNewMemory(e.target.value)}
          required
        />
        <StyledButton type="submit">Submit</StyledButton>
        <StyledLine />
      </StyledForm>
    </Container>
  );
}
