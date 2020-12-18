'use strict';
//to string
//  1) Old version
// console.log(typeof(string(null)));

// console.log(typeof(string(5)));

//  2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 24 + 'px';

//to number

// 1)

console.log(typeof(Number('5')));

// 2)

console.log(typeof(+'5'));

//3)

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('hello', '');

//to boolean

// 0, '', null, undefined, NaN;   Всегда false

// 1)
let switcher = null;
if (switcher){
    console.log('Working...');
}
switcher = 1;

if (switcher){
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('5')));

// 3)

console.log(typeof(!!'444444'));