const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_DB",
});

connection.connect(function (err) {
  if (err) throw err;
});

var update = function () {
  inquirer.prompt([
    {
      type: "list",
      name: "picked_update",
      message: "What would you like to update?",
      choices: ["Employees", "Roles", "Departments"],
    },
  ]);
};

module.exports = update;
