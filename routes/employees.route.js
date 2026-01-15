const express = require("express");

const route = express.Router();

//Get Employees Details
route.get("/employees", (req, res) => {
  res.json({ msg: "Employees" });
});
//POST Employees Details
route.post("/employee", (req, res) => {});
//Update Employees Details
route.put("/employee/:id", (req, res) => {});
//Delete Employees Details
route.delete("/employee/:id", (req, res) => {});

module.exports = route;
