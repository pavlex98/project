"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const ferstQ = prompt("Один из последних просмотренных фильмов?", "");
const firstOcen = prompt("На сколько оцените его?", "");
const secondQ = prompt("Один из последних просмотренных фильмов?", "");
const secondOcen = prompt("На сколько оцените его?", "");

personalMovieDB.movies[ferstQ] = firstOcen;
personalMovieDB.movies[secondQ] = secondOcen;
 
console.log(personalMovieDB);
