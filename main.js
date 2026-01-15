const express = require("express");

const app = express();

const Employeeroutes = require("./routes/employees.route");
const connectDB = require("./lib/db");

const PORT = 3000;

app.use(Employeeroutes);
connectDB();

app.listen(PORT, () => {
  console.log(`Server Running on Port no ${PORT}`);
});
