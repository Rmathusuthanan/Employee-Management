const express = require("express");

const route = express.Router();

const {
  Employees,
  addEmployees,
  UpdateEmployees,
  deleteEmployees,
} = require("../controller/employees.controller");

//Get Employees Details
route.get("/employees", Employees);

//POST Employees Details
route.post("/employee", addEmployees);
//Update Employees Details
route.put("/employee/:id", UpdateEmployees);
//Delete Employees Details
route.delete("/employee/:id", deleteEmployees);

module.exports = route;
