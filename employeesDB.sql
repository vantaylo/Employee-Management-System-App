DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR(30) NOT NULL,
    employee_last_name VARCHAR(30) NOT NULL,
    employee_role INT NOT NULL,
    employee_manager INT
);