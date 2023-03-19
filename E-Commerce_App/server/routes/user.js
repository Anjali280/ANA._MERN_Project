const router = require("express").Router();

router.get("/usergetrequest", (req, res) => {
  res.send("user test successful");
});

router.post("/userpostrequest", (req, res) => {
  const username = req.body.username;
  res.send("your response is :" + username);
});
module.exports = router;
