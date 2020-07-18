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
        connection.query("SELECT * FROM employees_db.employee_info", function (
          err,
          res
        ) {
          if (err) throw err;

          console.table(
            ["id", "employee_first_name", "employee_last_name"],
            res
          );

          connection.end();
        });
      } else if (answers.picked_view === "Roles") {
        connection.query("SELECT * FROM employees_db.role_info", function (
          err,
          res
        ) {
          if (err) throw err;

          console.table(["id", "title", "salary", "department"], res);

          connection.end();
        });
      } else if (answers.picked_view === "Departments") {
        connection.query("SELECT * FROM employees_db.dept_info", function (
          err,
          res
        ) {
          if (err) throw err;

          console.table(["id", "dept_name"], res);

          connection.end();
        });
      }
    });
};

module.exports = view;
