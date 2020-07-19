const mysql = require("mysql");
const inquirer = require("inquirer");
const main = require("./index");

var add = async function () {
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

  var allDepartments;
  var departmentId;

  await connection.query(
    "SELECT * FROM employees_db.dept_info",
    async function (err, res) {
      if (err) throw err;

      allDepartments = res.map(function (val, index, _) {
        return val.id + " - " + val.dept_name;
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

          var allManagers;
          var managerId;

          await connection.query(
            "SELECT * FROM employees_db.employee_info",
            function (err, res) {
              if (err) throw err;

              allManagers = res.map(function (val, index, _) {
                return (
                  val.id +
                  " - " +
                  val.employee_first_name +
                  " " +
                  val.employee_last_name
                );
              });

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
                          name: "picked_add_eeFirstN",
                          message: "What is the employee's first name?",
                        },
                        {
                          type: "input",
                          name: "picked_add_eeLastN",
                          message: "What is the employee's last name?",
                        },
                        {
                          type: "list",
                          name: "picked_add_eeRole",
                          message: "What is their role?",
                          choices: allRoles,
                        },
                        {
                          type: "list",
                          name: "picked_add_eeManager",
                          message: "Who is the Manager for this employee?",
                          choices: allManagers,
                        },
                      ])
                      .then((answers) => {
                        managerId = answers.picked_add_eeManager.split(" ")[0];
                        roleId = answers.picked_add_eeRole.split(" ")[0];

                        connection.query(
                          "INSERT INTO employee_info SET ?",
                          [
                            {
                              employee_first_name: answers.picked_add_eeFirstN,
                              employee_last_name: answers.picked_add_eeLastN,
                              employee_role: roleId,
                              employee_manager: managerId,
                            },
                          ],
                          function (err) {
                            if (err) throw err;
                          }
                        );

                        connection.end();
                        main();
                      });
                  } else if (answers.picked_add === "Role") {
                    inquirer
                      .prompt([
                        {
                          type: "input",
                          name: "picked_add_role",
                          message: "What role would you like to add?",
                        },
                        {
                          type: "input",
                          name: "picked_add_roleSalary",
                          message: "What is the salary?",
                        },
                        {
                          type: "list",
                          name: "picked_add_roleDepartment",
                          message: "What department is this role in?",
                          choices: allDepartments,
                        },
                      ])
                      .then((answers) => {
                        departmentId = answers.picked_add_roleDepartment.split(
                          " "
                        )[0];

                        connection.query(
                          "INSERT INTO role_info SET ?",
                          [
                            {
                              title: answers.picked_add_role,
                              salary: answers.picked_add_roleSalary,
                              department: departmentId,
                            },
                          ],
                          function (err) {
                            if (err) throw err;
                          }
                        );

                        connection.end();
                        main();
                      });
                  } else if (answers.picked_add === "Department") {
                    inquirer
                      .prompt([
                        {
                          type: "input",
                          name: "picked_add_dept",
                          message: "What department would you like to add?",
                        },
                      ])
                      .then((answers) => {
                        connection.query(
                          "INSERT INTO dept_info SET ?",
                          {
                            dept_name: answers.picked_add_dept,
                          },
                          function (err) {
                            if (err) throw err;
                          }
                        );

                        connection.end();
                        main();
                      });
                  }
                });
            }
          );
        }
      );
    }
  );
};

module.exports = add;
