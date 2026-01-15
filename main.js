const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(PORT, () => {
  console.log(`Server Running on Port no ${PORT}`);
});
