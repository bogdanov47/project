'use strict';

function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}
function done (){
    console.log('Я прошел этот урок');
}
learnJS('Java script',done);