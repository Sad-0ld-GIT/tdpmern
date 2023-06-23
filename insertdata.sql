USE gamesdb;

INSERT INTO customers (fname, lname, age, contact)
VALUES ('steve', 'rogers', 29, 07710123123),
('tony', 'stark', 31, 07710246810),
('pter', 'parker', 22, 077172225610),
('bruce', 'wayne', 35, 07719567123),
('clark', 'kent', 27, 07712336699);

INSERT INTO products (title, genre, price)
VALUES ('call of duty', 'FPS', 45.00),
('assassins creed', 'RPG', 35.00),
('FIFA 2023', 'Sports', 40.00),
('GTA 5', 'FPS', 30.00);

INSERT INTO orders (dateofpurchase, custid, prodid)
VALUES (20230601, 1, 2),
(20230612, 2, 4),
(20230610, 3, 1);

SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;