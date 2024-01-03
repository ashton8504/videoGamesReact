const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(cors({ origin: "*" }));

let gamingMemories = []; // Store submitted memories (temporary in-memory storage)

// POST endpoint to submit gaming memories
app.post("/api/memories", (req, res) => {
  const newMemory = req.body.memory;
  gamingMemories.push(newMemory);
  res.status(201).json({ message: "Memory added successfully" });
});

// GET endpoint to retrieve all gaming memories
app.get("/api/memories", (req, res) => {
  res.status(200).json({ memories: gamingMemories });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
