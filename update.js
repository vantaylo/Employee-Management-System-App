const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const main = require("./index");

var update = async function () {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_DB",
  });

  connection.connect(async function (err) {
    if (err) throw err;
  });

  var allEmployees;
  var employeeId;

  await connection.query(
    "SELECT * FROM employees_db.employee_info",
    async function (err, res) {
      if (err) throw err;

      allEmployees = res.map(function (val, index, _) {
        return (
          val.id +
          " - " +
          val.employee_first_name +
          " " +
          val.employee_last_name
        );
      });

      var allRoles;
      var roleId;

      await connection.query(
        "SELECT * FROM employees_db.role_info",
        async function (err, res) {
          if (err) throw err;

          allRoles = res.map(function (val, index, _) {
            return val.id + " - " + val.title;
          });

          inquirer
            .prompt([
              {
                type: "list",
                name: "picked_update_employee",
                message: "Which employee would you like to update their role?",
                choices: allEmployees,
              },
            ])
            .then((answers) => {
              employeeId = answers.picked_update_employee.split(" ")[0];

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "picked_update_role",
                    message: "What is their new role?",
                    choices: allRoles,
                  },
                ])
                .then((answers) => {
                  roleId = answers.picked_update_role.split(" ")[0];

                  connection.query(
                    "UPDATE employee_info SET employee_role = ? WHERE id = ?",
                    [roleId, employeeId],
                    function (err, res) {
                      if (err) throw err;
                    }
                  );

                  connection.end();
                  main();
                });
            });
        }
      );
    }
  );
};

module.exports = update;
