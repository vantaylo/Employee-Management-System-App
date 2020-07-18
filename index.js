const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const add = require("./add");
const view = require("./view");
const update = require("./update");

function main() {
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
      if (answers.add_view_update === "Add") {
        console.log("picked add");

        add();
      } else if (answers.add_view_update === "View") {
        console.log("picked view");

        view();
      } else if (answers.add_view_update === "Update") {
        console.log("picked update");

        update();
      }
    });
}

main();
module.exports = main;
