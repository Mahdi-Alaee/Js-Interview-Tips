//? ✌❤️

// Q1 (What in output in console?)
// "use strict"
// var x = 4
// x.count = 1
// console.log(x); // Error



// Q2 (What in output in console?)
// (function () {
//     "use strict";
// })()

// y = 2
// console.log(y); // 2



// Q3 (What in output in console?)
// "use strict"
// var x = 20
// var obj = {};
// with (obj) {
//     console.log(x);
// }



// Q4 (What in output in console?)
// "use strict"
// var undefined = 5;
// console.log(undefined); // Error



// Q5 (Strict mode was added in which version of EcmaScript?) // ES5



// Q6 (What in output in console?)
// "use strict"
// id = 100
// console.log(id);



// Q7 (What in output in console?)
// "use strict"
// var x = 10
// delete x 
// console.log(x); // Error



// Q8 (What in output in console?)
// if (1) {
//     "use strict"
//     x = 10
//     console.log(x); // 10
// }



// Q9 (What in output in console?)
// "use strict"
// var number = 012 
// console.log(number); // Error



// Q10 (What in output in console?)
// "use strict"
// delete Object.prototype // Error



// Q11 (What in output in console?)
// "use strict"
// function foo (a, a) {
//     console.log('Exec :))'); // Error
// }
// foo(1)



// Q12 (What in output in console?)
// "use strict"
// function foo () {

//     num = 10
// }
// foo()
// console.log(num); // 10 || error => Error



// Q13 (What in output in console?)
// function logNewPerson() {
//     "use strict";
  
//     var person2;
//     persom2 = {};
//     console.log(persom2); // Error
// }
  
// var person;
// persom = {};
// console.log(persom); // Object {} without 'use strict';
// logNewPerson();


// Q14 (What in output in console?)
// "use strict";

// catchThemAll();
// function catchThemAll() {
//   x = Math.PI;
//   return x * x;
// }

// console.log(x); // Error