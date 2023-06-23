USE gamesdb;

ALTER TABLE customers
ADD address VARCHAR(200);

ALTER TABLE customers
DROP COLUMN address;