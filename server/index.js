const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let totalClicks = 0;

// Route to handle root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Rooster Chick Chase API!");
});

// GET route to return total clicks
app.get("/clicks", (req, res) => {
  res.json({ totalClicks });
});

// POST route to update clicks
app.post("/clicks", (req, res) => {
  const { newClick } = req.body;
  totalClicks += newClick;
  res.json({ message: "Click updated", totalClicks });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
