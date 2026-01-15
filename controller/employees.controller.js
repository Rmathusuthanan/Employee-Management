const Employees = (req, res) => {
  res.json({ mgs: "Employees" });
};

const addEmployees = (req, res) => {
  res.json({ mgs: "Add Employees" });
};
const UpdateEmployees = (req, res) => {
  res.json({ mgs: "Update Employees" });
};
const deleteEmployees = (req, res) => {
  res.json({ mgs: "DeleteEmployees" });
};
module.exports = { Employees, addEmployees, UpdateEmployees, deleteEmployees };
