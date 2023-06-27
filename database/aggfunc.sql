USE gamesdb;

SELECT COUNT(first_name) FROM customers;

SELECT SUM(price) FROM products;
SELECT MIN(price) FROM products;
SELECT MAX(price) FROM products;
SELECT AVG(price) FROM products;

SELECT fk_cust_id AS customer_id, Count(id) AS number_of_orders FROM orders
GROUP BY fk_cust_id;