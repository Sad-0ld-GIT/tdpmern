USE gamesdb;

UPDATE customers
SET first_name='steve', last_name='jones'
WHERE id=7;

SELECT * FROM customers;