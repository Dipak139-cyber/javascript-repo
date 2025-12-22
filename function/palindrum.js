let number=[2,3,4,5,6];
let squarenumber=number.map(num=>num*num);
console.log(squarenumber);
console.log(number)

function check(number){
    return number>0;
}
let num=number.every(check)
console.log(num);




let array=[1,2,3,4,5,6,7,8]
function even(val){
    if(val%2==0)
    {
        console.log(val)
    }
}
array.forEach(even);

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((accumulator, value) => accumulator + value);
let max=numbers.reduce((accumulator,value)=>accumulator>value?accumulator:value);
console.log(max)
console.log(sum);