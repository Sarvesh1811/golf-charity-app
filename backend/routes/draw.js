const express = require("express");
const router = express.Router();

let lastWinner = "";

router.get("/", (req, res) => {
  const users = ["Sarvesh", "User2", "User3"];

  lastWinner = users[Math.floor(Math.random() * users.length)];

  res.json({ winner: lastWinner });
});

router.get("/last", (req, res) => {
  res.json({ winner: lastWinner });
});

module.exports = router;