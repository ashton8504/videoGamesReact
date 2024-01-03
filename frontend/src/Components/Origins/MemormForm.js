import React, { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="memoryInput">Your Gaming Memory:</label>
      <input
        type="text"
        id="memoryInput"
        value={newMemory}
        onChange={(e) => setNewMemory(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
