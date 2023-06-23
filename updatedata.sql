USE gamesdb;

UPDATE customers
SET fname='steve', lname='jones'
WHERE id=7;

SELECT * FROM customers;