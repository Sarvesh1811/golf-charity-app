const express = require("express");
const router = express.Router();

let users = [];

router.post("/login", (req, res) => {
  const { email } = req.body;

  if (!users.includes(email)) {
    users.push(email);
  }

  res.json({
    user: { email },
    users,
  });
});

router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router; 