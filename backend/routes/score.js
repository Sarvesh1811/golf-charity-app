const express = require("express");
const router = express.Router();

let scores = [];

router.post("/add", (req, res) => {
  const { score } = req.body;

  scores.push(score);

  res.json({
    scores,
  });
});

router.get("/", (req, res) => {
  res.json(scores);
});

module.exports = router;