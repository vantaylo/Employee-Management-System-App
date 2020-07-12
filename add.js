const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

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
    console.log("What the user wants to add:" + JSON.stringify(answers));

    inquirer
      .prompt([
        {
          type: "input",
          name: "name_input",
          message: "What is the employee first name?",
        },
      ])
      .then((answers) => {
        console.log("What the user wants to add:" + JSON.stringify(answers));
      });
  });
