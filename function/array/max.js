let numbers = [10, 20, 30, 40, 50];
let max=numbers.reduce((accumulator,value)=>accumulator>value?accumulator:value);
console.log(max)

let number = [10, 20, 30, 40, 50];
let min=number.reduce((accumulator,value)=>accumulator<value?accumulator:value);
console.log(min)