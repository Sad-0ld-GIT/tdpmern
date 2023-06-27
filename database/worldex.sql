USE world;

SELECT COUNT(Name) FROM city
WHERE CountryCode='BRA';

SELECT Region, MIN(LifeExpectancy), MAX(LifeExpectancy), AVG(LifeExpectancy) FROM country
GROUP BY Region
ORDER BY AVG(LifeExpectancy) DESC
LIMIT 10;

SELECT Name, Population, LifeExpectancy FROM country
WHERE Name = 'Argentina';

SELECT Name, LifeExpectancy FROM country
WHERE LifeExpectancy IS NOT NULL
ORDER BY LifeExpectancy DESC
LIMIT 1;

SELECT MAX(LifeExpectancy) FROM country;

SELECT Name, LifeExpectancy FROM country
WHERE Code = (
	SELECT CountryCode FROM city
    WHERE Name = 'Rio de Janeiro'
);

CREATE VIEW table_of_south_america
AS
	SELECT * FROM country
    WHERE region = 'South America'
;
    
SELECT Name FROM table_of_south_america;