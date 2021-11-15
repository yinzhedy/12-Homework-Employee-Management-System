DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR(100) NOT NULL.
    employee_last_name VARCHAR(100) NOT NULL,
    employee_role VARCHAR(100) NOT NULL,
    employee_manager VARCHAR(100) NOT NULL,
    FOREIGN KEY (employee_id),
    REFERENCES employees(id),
    ON DELETE SET NULL
);

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_id INT,
    department_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    role_name VARCHAR(100) NOT NULL,
    role_salary VARCHAR(100) NOT NULL,
    role_department VARCHAR(100) NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);
