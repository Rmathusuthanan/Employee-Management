const Employee = require("../models/Employee.model");

const Employees = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

const addEmployees = async (req, res) => {
  const createEmployee = new Employee({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    gender: req.body.gender,
  });

  console.log("Schema", createEmployee);
  try {
    const employee = await createEmployee.save();
    return res.status(201).json(employee);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const UpdateEmployees = (req, res) => {
  res.json({ mgs: "Update Employees" });
};
const deleteEmployees = (req, res) => {
  res.json({ mgs: "DeleteEmployees" });
};
module.exports = { Employees, addEmployees, UpdateEmployees, deleteEmployees };
