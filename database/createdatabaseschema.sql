CREATE DATABASE IF NOT EXISTS gamesdb;

USE	gamesdb;

DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS customers(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    age INT,
    contact CHAR(11)
);

CREATE TABLE IF NOT EXISTS products(
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders(
	id INT PRIMARY KEY AUTO_INCREMENT,
    date_of_purchase DATETIME NOT NULL,
    fk_cust_id INT NOT NULL,
    fk_prod_id INT NOT NULL,
    FOREIGN KEY(fk_cust_id) REFERENCES customers(id),
    FOREIGN KEY(fk_prod_id) REFERENCES products(id)
);

-- DESCRIBE customers