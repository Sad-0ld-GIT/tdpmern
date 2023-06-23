SELECT DISTINCT age FROM customers;

SELECT * FROM products
WHERE price >=40;

SELECT first_name, last_name FROM customers
WHERE age >30
ORDER BY last_name;

SELECT title FROM products
ORDER BY price DESC
LIMIT 1;

