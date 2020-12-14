'use strict';
const str = 'some';
const strObj = new String(str); 
console.log(typeof(str));
console.log(typeof(strObj));


const solider = {
    health: 400,
    armor: 100,
    sayHello : function(){
        console.log('hello');
    }

};
const john = Object.create(solider);
// const john ={
//     health: 100
// };
// john.__proto__ = solider;
// Object.setPrototypeOf(john,solider);
john.sayHello();
