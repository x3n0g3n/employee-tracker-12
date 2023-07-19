const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

//starter//


const inquirer = require("inquirer");
const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
  {
    type: "input",
    name: "departmentName",
    message: "Which department would you like to add?",
    when: (answers) => answers.action === "Add a department",
  },
  {
    type: "input",
    name: "roleName",
    message: "Which role would you like to add?",
    when: (answers) => answers.action === "Add a role",
  },
  {
    type: "input",
    name: "salary",
    message: "Salary:",
    when: (answers) => answers.action === "Add a role",
  },
  {
    type: "input",
    name: "department",
    message: "Department:",
    when: (answers) => answers.action === "Add a role",
  },
  {
    type: "input",
    name: "firstName",
    message: "First name:",
    when: (answers) => answers.action === "Add an employee",
  },
  {
    type: "input",
    name: "lastName",
    message: "Last name:",
    when: (answers) => answers.action === "Add an employee",
  },
  {
    type: "input",
    name: "role",
    message: "Role:",
    when: (answers) => answers.action === "Add an employee",
  },
  {
    type: "input",
    name: "manager",
    message: "Manager:",
    when: (answers) => answers.action === "Add an employee",
  },
  {
    type: "input",
    name: "employeeName",
    message: "Which employee's role would you like to update?",
    when: (answers) => answers.action === "Update an employee role",
  },
  {
    type: "input",
    name: "newRole",
    message: "New role:",
    when: (answers) => answers.action === "Update an employee role",
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log("Answers:", answers);
  // Do something with the user's answers here
});