function factorial(n){
    let fact=1;
    if(n<0){
        console.log("not possible");
    }
    if(n===0||n===1){
        return 1;
    }
    let result=1;
    for(let i=5;i>=1;i--){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(0));