import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Styled Components
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

export default function MemoryForm() {
  const [newMemory, setNewMemory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/memories", {
        memory: newMemory,
      });
      // Optionally update state or trigger a fetch for all memories after posting
      setNewMemory(""); // Clear the input field after submitting
    } catch (error) {
      console.error("Error posting memory:", error);
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="memoryInput">Gaming Memory</StyledLabel>
        <input
          type="text"
          id="memoryInput"
          value={newMemory}
          onChange={(e) => setNewMemory(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </StyledForm>
    </Container>
  );
}
