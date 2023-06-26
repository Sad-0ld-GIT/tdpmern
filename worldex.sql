USE world;

SELECT COUNT(Name) FROM city
WHERE CountryCode='USA';

SELECT Name, Population, LifeExpectancy FROM country
WHERE Code='ARG';

SELECT Name, LifeExpectancy FROM country
WHERE LifeExpectancy IS NOT NULL
ORDER BY LifeExpectancy DESC
LIMIT 1;

SELECT MAX(LifeExpectancy) FROM country;