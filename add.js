const mysql = require("mysql");
const inquirer = require("inquirer");
const main = require("./index");

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
              choices: ["Intern", "Software Engineer", "Manager", "CEO"],
            },
            {
              type: "list",
              name: "picked_add_eeManager",
              message: "Who is the Manager for this employee?",
              choices: ["Manager A", "Manager B", "Manager C", "Manager D"],
            },
          ])
          .then((answers) => {
            console.log("Adding employee: " + JSON.stringify(answers));

            connection.query(
              "INSERT INTO employee_info SET ?",
              [
                {
                  employee_first_name: answers.picked_add_eeFirstN,
                  employee_last_name: answers.picked_add_eeLastN,
                  employee_role: answers.picked_add_eeRole,
                  employee_manager: answers.picked_add_eeManager,
                },
              ],
              function (err) {
                if (err) throw err;
              }
            );

            connection.end();
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
              message: "What is their salary?",
            },
            {
              type: "input",
              name: "picked_add_roleDepartment",
              message: "What department is this role in?",
            },
          ])
          .then((answers) => {
            console.log("Adding role: " + JSON.stringify(answers));

            connection.query(
              "INSERT INTO role_info SET ?",
              [
                {
                  title: answers.picked_add_role,
                  salary: answers.picked_add_roleSalary,
                  department: answers.picked_add_roleDepartment,
                },
              ],
              function (err) {
                if (err) throw err;
              }
            );

            connection.end();
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
            console.log("Adding department: " + JSON.stringify(answers));

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
          });
      }
    });
};

module.exports = add;
