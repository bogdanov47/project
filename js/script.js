/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms ;
// const PersonalMoviesDB = {

//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privet: false

// };

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
}
}
start();

const PersonalMoviesDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genre: [],
        privet: false

};

function RememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Сколько фильмов вы уже посмотрели?'),
              b = prompt('На сколько вы его оцениваете?');
        if (a != null && b != null && a != '' && b != '' && a.length <50){
            PersonalMoviesDB.movies[a] = b;
            console.log('DONE');
        } else {
                console.log('error');
                i--;
            }
        }
 }
// RememberMyFilms();

// if (PersonalMoviesDB.count < 10){
//     console.log('Просмотренно мало фильмов');
// } else if (PersonalMoviesDB.count >= 10 && PersonalMoviesDB.count < 30){
//         console.log('Вы классический зритель');
//     } else if (PersonalMoviesDB.count >= 30){
//         console.log('Вы киноман');
//     } else {
//         console.log('Ошибка');
//     }

function DetectPerosnalLevel(){
    if (PersonalMoviesDB.count < 10){
        console.log('Просмотренно мало фильмов');
    } else if (PersonalMoviesDB.count >= 10 && PersonalMoviesDB.count < 30){
            console.log('Вы классический зритель');
        } else if (PersonalMoviesDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    

}
// DetectPerosnalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(PersonalMoviesDB);
    }
}
showMyDB(PersonalMoviesDB.privet);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt( `Какой ваш любимый жанр ${i}`);  
        PersonalMoviesDB.genre[i - 1] = genre;
    }
}
writeYourGenres();