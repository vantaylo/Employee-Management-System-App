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

var update = async function () {
  var allEmployees;
  var employeeId;

  await connection.query("SELECT * FROM employees_db.employee_info", function (
    err,
    res
  ) {
    if (err) throw err;

    allEmployees = res.map(function (val, index, _) {
      return (
        val.id + " - " + val.employee_first_name + " " + val.employee_last_name
      );
    });

    console.log("RES: ", res);
    console.log("ALL EMPLOYEES: ", allEmployees);

    inquirer
      .prompt([
        {
          type: "list",
          name: "picked_update_employee",
          message: "Which employee would you like to update?",
          choices: allEmployees,
        },
        {
          type: "list",
          name: "picked_update_choices",
          message: "What would you like to update?",
          choices: ["Employee's Role", "Employee's Manager"],
        },
      ])
      .then((answers) => {
        employeeId = answers.picked_update_employee.split(" ")[0];

        if (answers.picked_update_choices === "Employee's Role") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "picked_update_role",
                message: "What is their new role?",
              },
            ])
            .then((answers) => {
              connection.query(
                "UPDATE employee_info SET employee_role = ? WHERE id = ?",
                [answers.picked_update_role, employeeId],
                function (err, res) {
                  if (err) throw err;
                }
              );
            });
        } else if (answers.picked_update_choices === "Employee's Manager") {
          inquirer
            .prompt([
              {
                type: "list",
                name: "picked_update_manager",
                message: "Who is their new manager?",
                choices: ["Manager A", "Manager B", "Manager C", "Manager D"],
              },
            ])
            .then((answers) => {
              connection.query(
                "UPDATE employee_info SET employee_manager = ? WHERE id = ?",
                [answers.picked_update_manager, employeeId],
                function (err, res) {
                  if (err) throw err;
                }
              );
            });
        }
      });
  });
};

module.exports = update;
