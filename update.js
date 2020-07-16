const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

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
