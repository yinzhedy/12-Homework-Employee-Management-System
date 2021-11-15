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
        console.log(JSON.stringify(answer))
        answerString = JSON.stringify(answer)

            if (answerString == '{"menu":"view all departments"}') {
                console.log('departments chosen')
                    async function fetchDepartments() {
                        const preB = await db;  
                        const [results, fields] = await preB.execute('SELECT * FROM departments');
                        console.table(results);
                        return results
                      
                    }
                fetchDepartments().then(() => init())
            }
            else if (answer == '{"menu":"view all roles"}') {
                console.log('roles chosen')
                    async function fetchRoles() {
                        const preB = await db;  
                        const [results, fields] = await preB.execute('SELECT * FROM roles');
                        console.table(results);
                        return results
                      
                    }
                fetchRoles().then(() => init())
            }
            else if (answer == '{"menu":"view all employees"}' ) {
                console.log('employees chosen')
                    async function fetchEmployees() {
                        const preB = await db;  
                        const [results, fields] = await preB.execute('SELECT * FROM employees');
                        console.table(results);
                        return results
                      
                    }
                fetchEmployees().then(() => init())
                }
            else if (answerString == '{"menu":"add a department"}') {
                console.log('add department chosen')
                addDepartment();
            }
                
            else if (answer = '{"menu":"add a role"}') {
                console.log('add role chosen')
                addRoleName();
            }
            else if (answer = '{"menu":"add an employee"}') {
                console.log('add employee chosen')
                addEmployeeFirstName();
            }
            else if (answer = '{"menu":"update a role"}') {
                console.log('update employee role chosen')
            }
            else { console.log('error with menu') }
    })
}

function addDepartment() {
        inquirer.prompt ([{
            type: 'input',
            name: 'addDepartment',
            message: 'What is the name of the department you would like to add?'
        }
        ])
        .then(
            async function departmentName(name) {
            const preB = await db;
            await preB.execute('INSERT INTO departments (department_name) VALUES (?);', [name]);
            console.log("Department Added!");
        }
        )
        .then(() => init());
}

function addRoleName() {
    inquirer.prompt ([{
            type: 'input',
            name: 'addRoleName',
            message: "What is the name of the name of this role?"
    }
    ])
    .then(
        async function roleName(name) {
        const preB = await db;
        await preB.execute('INSERT INTO roles (role_name) VALUES (?);', [name]);
        console.log("Role name Added!");
    }
    )
    .then(() => addRoleSalary()); 
};
function addRoleSalary() {
        inquirer.prompt ([{
            type: 'input',
            name: 'addRoleSalary',
            message: "What is the salary for this new role?"
    }
    ])
    .then(
        async function roleSalary(salary) {
        const preB = await db;
        await preB.execute('INSERT INTO roles (role_salary) VALUES (?);', [salary]);
        console.log("Role salary Added!");
    }
    )
    .then(() => addRoleDepartment());
};
function addRoleDepartment() {
        inquirer.prompt ([{
            type: 'input',
            name: 'addRoleDepartment',
            message: "What department does this role belong to?"
    }
    ])
    .then(
        async function roledepartment(department) {
        const preB = await db;
        await preB.execute('INSERT INTO roles (role_salary) VALUES (?);', [department]);
        console.log("Role department Added!");
    }
    )
    .then(() => init());
}












function addEmployeeFirstName() {
    inquirer.prompt ([{
        type: 'input',
        name: 'addEmployeeFirstName',
        message: 'What is the first name of the employee?'
}
])
.then(
    async function employeeFirstName(name) {
    const preB = await db;
    await preB.execute('INSERT INTO employees (employee_first_name) VALUES (?);', [name]);
    console.log("employee first name Added!");
}
)
.then(() => addEmployeeLastName());};


function addEmployeeLastName() {
inquirer.prompt ([{
    type: 'input',
    name: 'addEmployeeLastName',
    message: 'What is the last name of the employee?'
}
])
.then(
async function employeeLastName(name) {
const preB = await db;
await preB.execute('INSERT INTO employees (employee_last_name) VALUES (?);', [name]);
console.log("Employee last name Added!");
}
)
.then(() => addEmployeeRole());};

function addEmployeeRole() {

    inquirer.prompt ([{
        type: 'input',
        name: 'addEmployeeRole',
        message: 'What is the role of this employee?'
}
])
.then(
    async function employeeRole(role) {
    const preB = await db;
    await preB.execute('INSERT INTO employees (employee_role) VALUES (?);', [role]);
    console.log("Employee role Added!");
}
)
.then(() => addEmployeeManager());}

function addEmployeeManager() {

    inquirer.prompt ([{
        type: 'input',
        name: 'addEmployeeManager',
        message: "Who is the manager of this employee?"
}
])
.then(
    async function employeeManager(manager) {
    const preB = await db;
    await preB.execute('INSERT INTO employees (employee_manager) VALUES (?);', [manager]);
    console.log("Employee manager Added!");
}
)
.then(() => init());
}
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