//true+true
//"string"-"string"
// 9-"5"
//false-true

// console.log(true + true)
// console.log("string" - "string")
// console.log(9 - "5")
// console.log(false - true)
// console.log(isNaN(9534))
// console.log(isNaN('string'))
// console.log(NaN === NaN)
// console.log(Number.NaN === NaN)
// console.log(Number.NaN === Number.NaN)
// console.log(isNaN(NaN))
// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))

//Swipe two number
//Solution:
// var a = 5;
// var b = 10;

// var c = 0;
// c = a;
// a = b
// b = c

// console.log('a,b', a, b)

//Swipe two number without using third variable
// var a = 5;
// var b = 10;

// a = a + b; //15
// b = a - b; //15-10=5
// a = a - b // 15-5 =10

// console.log('a,b', a, b)

//Check a year is leap year or not

// var year = 2100;
// debugger;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`${year} is leap year.`)
//         } else {
//             console.log(`${year} is not leap year.`)
//         }
//     } else {
//         console.log(`${year} is leap year.`)
//     }
// } else {
//     console.log(`${year} not is leap year.`)
// }

//What is truthy and falsy value in javascript.

/*Ans: There is 5 falsy value in javascript it always returns false value. These 5 are 
0, "", undefined, null, NaN, false.
*/

// if (NaN) {
//     console.log('We loose the game!!')
// } else {
//     console.log('Yeaaa, We won the game.')
// }

//Ternary operator.
// var age = 18;
// console.log((age >= 18) ? 'Yes you can vote' : 'You are not eligible')

// let day = '';
// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         console.log(`Today is ${day}`);
//         break;
//     case 1:
//         day = 'Monday';
//         console.log(`Today is ${day}`);
//         break;
//     case 2:
//         day = 'Tuesday';
//         console.log(`Today is ${day}`);
//         break;
//     case 3:
//         day = 'Wednesday';
//         console.log(`Today is ${day}`);
//         break;
//     case 4:
//         day = 'Thursday';
//         console.log(`Today is ${day}`);
//         break;
//     case 5:
//         day = 'Friday';
//         console.log(`Today is ${day}`);
//         break;
//     default:
//         day = 'Saturday';
//         console.log(`Today is ${day}`);
// }

var numb = 11;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

do {
    console.log(numb);
    numb++;
}
while (numb <= 10)


let table = 8;
for (let i = 1; i <= 10; i++) {
    console.log(`${table}*${i} = ${table*i}`)
}