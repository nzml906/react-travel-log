const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi api/logs",
  });
});

module.exports = router;
