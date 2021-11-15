const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const mysql = require('mysql2');
const db = require('./db/connection')

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]   
        }
    ])
    .then((answer) => {

            if (answer = 'view all departments') {
                console.log('departments chosen')
                db.promise()
                .execute("DESCRIBE departments`")
                .then(([table]) => {
                    console.log(table);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (answer = 'view all roles') {
                db.promise()
                .execute("DESCRIBE roles`")
                .then(([table]) => {
                    console.log(table);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (answer = 'view all employees') {
                db.promise()
                .execute("DESCRIBE employees`")
                .then(([table]) => {
                    console.log(table);
                }).catch(err => {
                    console.log(err);
                }); }
            else if (answer == 'add a department') {}
                
            else if (answer == 'add a role') {}
                    // code block
            else if (answer == 'add an employee') {}
                    // code block
            else if (answer == 'update an employee role') {}
                    // code block
            else { console.log('error with menu') }
    })
}
        //   {
        //     type: 'input',
        //     name: 'addDepartment',
        //     message: 'What is the name of the department you would like to add?'
        //   },
        //   {
        //     type: 'input',
        //     name: 'addRoleName',
        //     message: "What is the name of the name of this role?",
        //   },
        //   {
        //     type: 'input',
        //     name: 'addRoleSalary',
        //     message: "What is the salary for this new role?"
        //   },
        //   {
        //     type: 'input',
        //     name: 'addRoleDepartment',
        //     message: "What department does this role belong to?"
        //   },
        //   {
        //     type: 'input',
        //     name: 'addEmployeeFirstName',
        //     message: 'What is the first name of the employee?',
        //   },
        //   {
        //     type: 'input',
        //     name: 'addEmployeeLastName',
        //     message: 'What is the last name of the employee?'
        //   },
        //   {
        //     type: 'input',
        //     name: 'addEmployeeRole',
        //     message: 'What is the role of this employee?'
        //   },
        //   {
        //     type: 'input',
        //     name: 'addEmployeeManager',
        //     message: "Who is the manager of this employee?",
        //   },
        //   {
        //     type: 'input',
        //     name: 'updateEmployee',
        //     message: "Please select an employee to update their role:",
        //   },
        //   {
        //     type: 'input',
        //     name: 'updateEmployeeRole',
        //     message: "Please select the role you'd like to assign to this employee:",
        //   },
        //   {
        //     type: 'input',
        //     name: 'tests',
        //     message: "Please include any tests for your application here:",
        //   },
    // ])
    
        //   .then((answers) => {
        //       writeFileAsync(path.join (process.cwd(), "README.md"), generateREADME(answers));
        //     })
        //     .then(() => console.log('Successfully created README.md!'))
        //     .catch((err) => console.error(err));
// }

init()