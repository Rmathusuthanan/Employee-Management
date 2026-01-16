const express = require("express");

const route = express.Router();

const {
  Employees,
  addEmployees,
  getEmployee,
  deleteEmployees,
} = require("../controller/employees.controller");

//Get Employees Details
route.get("/employees", Employees);

//Get Employees Details
route.get("/employee/:id", getEmployee);

//POST Employees Details
route.post("/employee", addEmployees);
//Update Employees Details
route.put("/employee/:id", getEmployee);
//Delete Employees Details
route.delete("/employee/:id", deleteEmployees);

module.exports = route;
