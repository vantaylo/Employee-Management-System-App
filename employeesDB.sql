DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee_info (
	id int NOT NULL AUTO_INCREMENT,
    employee_first_name VARCHAR(30) NOT NULL,
    employee_last_name VARCHAR(30) NOT NULL,
    employee_role INT NOT NULL,
    employee_manager INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role_info (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE dept_info (
	id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
);


