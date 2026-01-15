const express = require("express");

const app = express();

const Employeeroutes = require("./routes/employees.route");

const PORT = 3000;

app.use(Employeeroutes);

app.listen(PORT, () => {
  console.log(`Server Running on Port no ${PORT}`);
});
