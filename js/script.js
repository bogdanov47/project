"use strict";
let num = 20;
function showFirstMessage(text){
    console.log(text);
    num = 10;

}
showFirstMessage('Hello world!');
console.log(num);

function calc (a , b){
    return(a + b);    
}
console.log(calc(4 , 5));
console.log(calc(5 , 7));
console.log(calc(7 , 15));

function ret(){
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log('Hello pizdyk')
};
logger();

const calc = (a , b) => {
console.log('1');
return a + b;
};