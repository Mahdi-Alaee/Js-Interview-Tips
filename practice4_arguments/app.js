function sum(){
    let sum = 0;
    Array.from(arguments).forEach(arg => sum += arg);
    return sum;
}

const sum2 = (...args) => {
    let sum = 0;    
    Array.from(args).forEach(arg => sum += arg);
    return sum;
}

console.log(sum(1,2,3));
console.log(sum2(1,2,3));