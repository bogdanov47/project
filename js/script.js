"use strict";

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error');
}

const numb = 50;

switch(numb){

    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 51:
        console.log('Верно!');
        break;
    default:  console.log('Неверно!');
    break;

}