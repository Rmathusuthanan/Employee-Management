const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//Get Employees Details
app.get("/employee", (req, res) => {});
//POST Employees Details
app.post("/employee", (req, res) => {});
//Update Employees Details
app.put("/employee/:id", (req, res) => {});
//Delete Employees Details
app.delete("/employee/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server Running on Port no ${PORT}`);
});
