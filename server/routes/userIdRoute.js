const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = "admin555";
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
