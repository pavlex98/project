"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++){
    const ferstQ = prompt("Один из последних просмотренных фильмов?", ""),
          firstOcen = prompt("На сколько оцените его?", "");

          if (ferstQ != null && firstOcen != null && a != "" && )



personalMovieDB.movies[ferstQ] = firstOcen;
}
 
console.log(personalMovieDB);
