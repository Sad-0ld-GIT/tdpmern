USE world;

SELECT co.Name AS CountryName, ci.Name AS CityName
FROM country co
JOIN city ci ON co.Code = ci.CountryCode;

SELECT co.Name AS CountryName, ci.Name AS CityName
FROM country co
JOIN city ci ON co.Capital = ci.ID
WHERE co.Name = 'Spain';

SELECT DISTINCT(cl.Language) AS LanguageSpoken
FROM  country co
JOIN countrylanguage cl ON co.Code = cl.CountryCode
WHERE co.Region = 'Southeast Asia'
ORDER BY cl.Language;

SELECT Name FROM city
WHERE Name LIKE 'F%'
LIMIT 25;

SELECT COUNT(ci.Name)
FROM city ci
JOIN country co ON ci.CountryCode = co.Code
WHERE co.Name = 'China';
 
SELECT Name, Population FROM country
WHERE Population IS NOT NULL
ORDER BY Population
LIMIT 1;

SELECT COUNT(Name) FROM country;

SELECT Name FROM country
ORDER BY SurfaceArea DESC
LIMIT 10;