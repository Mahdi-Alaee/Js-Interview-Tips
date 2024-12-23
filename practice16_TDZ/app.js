//? What is TDZ (Temporal Dead Zone) ✌❤️

// Exp 1
// console.log(number);
// var number = 12 // Hoist

// console.log(number);
// let number = 12 // TDZ




// Exp 2
// let str = 'outer scope';

// (function () {
//     // Start TDZ
//     console.log(str);

//     let str = 'inner scope' // End TDZ
// })()



// Exp 3
// Start b TDZ

// let a = func()
// const b = 2 // End b TDZ
// function func () {
//     return b
// }




// Exp 4
// (function (a, b = a) {
//     console.log(a, b);
// })(1, undefined)

// (function (a = b, b) {
//     console.log(a, b);
// })(undefined, 1)

// (function (a = a) {
//     console.log(a, b);
// })(undefined)



// Exp 5
// {
//     age: let age;
// }



// Exp 6

// Start number TDZ
// function logger () {
//     console.log(number);
// }
// logger()
// let number = 34 // End number TDZ



// Exp 7
// console.log(number);
// const number = 12