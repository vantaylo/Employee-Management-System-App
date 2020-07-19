// var allManagers;
// var managerId;

// await connection.query(
//   "SELECT * FROM employees_db.employee_info",
//   async function (err, res) {
//     if (err) throw err;

//     console.log("Test1");

//     allManagers = res.map(function (val, index, _) {
//       val.id +
//         " - " +
//         val.employee_first_name +
//         " " +
//         val.employee_last_name;
//     });

// {
//   type: "list",
//   name: "picked_update_choices",
//   message: "What would you like to update?",
//   choices: ["Employee's Role", "Employee's Manager"],
// },

// else if (
//   answers.picked_update_choices === "Employee's Manager"
// ) {

//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "picked_update_manager",
//         message: "Who is their new manager?",
//         choices: allManagers,
//       },
//     ])
//     .then((answers) => {
//       connection.query(
//         "UPDATE employee_info SET employee_manager = ? WHERE id = ?",
//         [answers.picked_update_manager, managerId],
//         function (err, res) {
//           if (err) throw err;
//         }
//       );

//       connection.end();
//       main();
// });
// }

//   );
// };
