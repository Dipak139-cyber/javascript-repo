let array=[1,2,3,4,5];
let sum=array.reduce((accumulator,value)=>accumulator+value,0)
let average=sum/array.length;
console.log(sum)
console.log(average)