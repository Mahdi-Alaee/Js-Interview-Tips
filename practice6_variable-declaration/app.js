(function () {
    var a = b = 3

    //! Wrong Code
    //! var a = 3
    //! var b = 3

    //* Correct Code
    //* b = 3
    //* var a = b
})()

console.log('a defined? => ', typeof a !== 'undefined'); // false
console.log('b defined? => ', typeof b !== 'undefined'); // true