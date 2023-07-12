USE sakila;

SELECT first_name, last_name FROM actor
ORDER BY last_name;

SELECT first_name, last_name FROM actor
WHERE first_name = 'John';

SELECT first_name, last_name FROM actor
WHERE last_name = 'Neeson';

SELECT actor_id, first_name, last_name FROM actor
WHERE actor_id % 10 = 0;

SELECT title, description FROM film
WHERE film_id = 100;

SELECT title, rating FROM film
WHERE rating = 'R';

SELECT title, rating FROM film
WHERE rating != 'R';

SELECT title, length FROM film
ORDER BY length
LIMIT 10;

SELECT title, MAX(length) FROM film;

SELECT title, special_features FROM film
WHERE special_features Like '%Deleted Scenes%';