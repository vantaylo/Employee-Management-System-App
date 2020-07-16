const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

var add = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "picked_add",
        message: "What would you like to add?",
        choices: ["Employee", "Role", "Department"],
      },
    ])
    .then((answers) => {
      if (answers.picked_add === "Employee") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "picked_add",
              message: "What is the employee's first name?",
            },
          ])
          .then((answers) => {
            console.log("Adding employee: " + JSON.stringify(answers));
          });
      } else if (answers.picked_add === "Role") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "picked_add",
              message: "What role would you like to add?",
            },
          ])
          .then((answers) => {
            console.log("Adding role: " + JSON.stringify(answers));
          });
      } else if (answers.picked_add === "Department") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "picked_add",
              message: "What department would you like to add?",
            },
          ])
          .then((answers) => {
            console.log("Adding department: " + JSON.stringify(answers));
          });
      }
    });
};

module.exports = add;
