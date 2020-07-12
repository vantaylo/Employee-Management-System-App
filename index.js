const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

inquirer
  .prompt([
    {
      type: "list",
      name: "add_view_update",
      message: "What would you like to do?",
      choices: ["Add", "View", "Update"],
    },
  ])
  .then((answers) => {
    console.log(answers);

    if (answers.add_view_update === "Add") {
      console.log("picked add");

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
        });
    }

    if (answers.add_view_update === "View") {
      console.log("picked add");

      inquirer
        .prompt([
          {
            type: "list",
            name: "picked_view",
            message: "What would you like to view?",
            choices: ["Employee", "Role", "Department"],
          },
        ])
        .then((answers) => {
          console.log("What the user wants to add:" + JSON.stringify(answers));
        });
    }

    if (answers.add_view_update === "Update") {
      console.log("picked update");

      inquirer
        .prompt([
          {
            type: "list",
            name: "picked_update",
            message: "What would you like to update?",
            choices: ["Employee", "Role", "Department"],
          },
        ])
        .then((answers) => {
          console.log("What the user wants to add:" + JSON.stringify(answers));
        });
    }
  });
