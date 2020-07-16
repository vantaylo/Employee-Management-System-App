const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

var view = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "picked_view",
        message: "What would you like to view?",
        choices: ["Employees", "Roles", "Departments"],
      },
    ])
    .then((answers) => {
      if (answers.picked_view === "Employees") {
        console.log("lets view: " + JSON.stringify(answers));
        //
      } else if (answers.picked_view === "Roles") {
        console.log("lets view: " + JSON.stringify(answers));
        //
      } else if (answers.picked_view === "Departments") {
        console.log("lets view: " + JSON.stringify(answers));
        //
      }
    });
};

module.exports = view;
