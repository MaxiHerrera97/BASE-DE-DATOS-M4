/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90;';

const ejercicio03 = 'SELECT * FROM movies WHERE year BETWEEN 1930 AND 1940;';

const ejercicio04 = 'FROM movies WHERE title LIKE '%til%';';

const ejercicio05 = 'FROM movies WHERE array_length(actors,1)=1;';

const ejercicio06 = 'SELECT title, AVG(rating) FROM movies, unnest(ratings)AS rating GROUP BY title;';

const ejercicio07 = 'SELECT actors FROM movies WHERE title LIKE '%Fastand%' AND year=2016;';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
