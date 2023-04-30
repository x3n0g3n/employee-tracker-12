DROP DATABASE IF EXISTS empTracker_db;

CREATE DATABASE empTracker_db;

USE DATABASE empTracker_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, department_name VARCHAR(30)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, role_id INT,
    manager_id INT 

);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(30)
    salary DECIMAL
    department_id INT
);