const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

inquirer
  .prompt([
    {
      type: "list",
      name: "picked_view",
      message: "What would you like to view?",
      choices: ["Employee"],
    },
  ])
  .then((answers) => {
    console.log("What the user wants to add:" + JSON.stringify(answers));
  });
