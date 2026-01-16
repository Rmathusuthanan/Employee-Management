const Employee = require("../models/Employee.model");

const Employees = async (req, res) => {
  const employees = await Employee.find();

  res.send(employees);
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
const getEmployee = async (req, res) => {
  console.log(req.params.id);

  try {
    const employee = await Employee.findById(req.params.id);

    if (employee == null) {
      return res.status(404).json({ message: "Not found" });
    } else {
      return res.json(employee);
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};
const deleteEmployees = (req, res) => {
  res.json({ mgs: "DeleteEmployees" });
};
module.exports = { Employees, addEmployees, getEmployee, deleteEmployees };
