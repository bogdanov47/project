'use strict';
// const obj = {
//     a: 1,
//     b: 7
// // };
// function copy(mainObj){
//     let objCopy = {};
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const num = {
//     a: 5,
//     b: 4,
//     c:{
//         x:4,
//         y:7
//     }
// };
// const newNum = copy(num);
// newNum.a = 10;
// console.log(num);
// console.log(newNum);

const add = {
    d:18,
    j:57
};
const clone = (Object.assign({}, add));
clone.d = 53;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[2] = 'poshel nahyu pes';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      console.log(internet);

      function log(a, b ,c){
         console.log(a);
         console.log(b);
         console.log(c);
      }
      const num = [2, 5, 7];
console.log(...num);

const array = ['a', 'b'];
const neaAraay = [...array];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};