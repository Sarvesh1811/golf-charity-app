const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { plan } = req.body;

  res.json({
    message: "Subscribed",
    plan,
  });
});

module.exports = router;