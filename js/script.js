"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const PersonalMoviesDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privet: false

};
for (let i = 0; i < 2; i++){
    const a = prompt('Сколько фильмов вы уже посмотрели?'),
          b = prompt('На сколько вы его оцениваете?');
         if (a != null && b != null && a != '' && b != '' && a.length < 50){
            PersonalMoviesDB.movies[a] = b;
            console.log('DONE GANDON');
            }else {
                console.log('WRONG UEBAK');
                --i;
            }
            
        }