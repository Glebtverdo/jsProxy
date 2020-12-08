import { watchObj, EmailParser } from "./hw.js"

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);
parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);


let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val) {
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
/* 
    в консоли: 
    innerHTML <strong>HTML</strong><em>Changed</em
*/

cleverDiv.style.color = 'red';
/* 
    весь текст стал красным
    в консоли: 
    color red
*/

cleverDiv.querySelector('em').style.color = 'green';
/* 
    em стал зелёным
    в консоли ничего не добавилось

    // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/




















// let inp1 = document.querySelector('.input1');
// let inp2 = document.querySelector('.input2');
// inp1.onchange = function() {
//     fatherOld(inp1.value)
// }
// inp2.onchange = function() {
//     console.time("old")
//     for (let some of fatherGen(inp2.value)) {

//     }
//     console.timeEnd("old")
// }
// let str = '  Всем  привет! Ура ура! ';

// this.console.log(wordsCount(str)); // 4

// for (let some of getWords(str)) {
//     this.console.log(some); // выводит 4 слова
// }