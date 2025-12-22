let number = [ 20, 30, 40, 50];
let min=number.reduce((accumulator,value)=>accumulator<value?accumulator:value);
console.log(min)