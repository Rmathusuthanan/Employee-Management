const Employees = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

const addEmployees = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
const UpdateEmployees = (req, res) => {
  res.json({ mgs: "Update Employees" });
};
const deleteEmployees = (req, res) => {
  res.json({ mgs: "DeleteEmployees" });
};
module.exports = { Employees, addEmployees, UpdateEmployees, deleteEmployees };
