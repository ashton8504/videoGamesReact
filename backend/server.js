const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(cors({ origin: "*" }));

let gamingMemories = [];

app.post("/api/memories", (req, res) => {
  const newMemory = req.body.memory;
  gamingMemories.push(newMemory);
  res
    .status(201)
    .json({ message: "Memory added successfully", memory: newMemory });
});

app.get("/api/memories", (req, res) => {
  res.status(200).json({ memories: gamingMemories });
});

app.put("/api/memories/:id", (req, res) => {
  const memoryId = req.params.id;
  const updatedMemory = req.body.memory;

  const memoryIndex = gamingMemories.findIndex(
    (memory) => memory.id === memoryId
  );

  if (memoryIndex !== -1) {
    gamingMemories[memoryIndex] = updatedMemory;
    res
      .status(200)
      .json({ message: "Memory updated successfully", memory: updatedMemory });
  } else {
    res.status(404).json({ message: "Memory not found" });
  }
});

app.delete("/api/memories/:id", (req, res) => {
  const memoryId = req.params.id;
  const memoryIndex = gamingMemories.findIndex(
    (memory) => memory.id === memoryId
  );

  if (memoryIndex !== -1) {
    const [deletedMemory] = gamingMemories.splice(memoryIndex, 1);
    res
      .status(200)
      .json({ message: "Memory deleted successfully", memory: deletedMemory });
  } else {
    res.status(404).json({ message: "Memory not found" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
