USE gamesdb;

INSERT INTO customers (first_name, last_name, age, contact)
VALUES ('steve', 'rogers', 29, 07710123123),
('tony', 'stark', 31, 07710246810),
('peter', 'parker', 22, 077172225610),
('steven', 'strange', 34, 07718919234),
('bruce', 'wayne', 31, 07719567123),
('clark', 'kent', 27, 07712336699);

INSERT INTO products (title, genre, price)
VALUES ('call of duty', 'FPS', 45.00),
('assassins creed', 'RPG', 35.00),
('FIFA 2023', 'Sports', 40.00),
('GTA 5', 'Open world', 30.00);

INSERT INTO orders (date_of_purchase, fk_cust_id, fk_prod_id)
VALUES (20230601, 1, 2),
(20230612, 2, 4),
(20230610, 3, 1),
(20230610, 1, 1),
(20230610, 4, 3),
(20230610, 5, 2);

SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;