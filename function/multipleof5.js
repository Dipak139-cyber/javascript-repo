function multiple(n){
    let mul=0;
    for(i=1;i<=10;i++){
        mul=n*i;
        // console.log('n*'+i +"=",mul)
        console.log(`${n} * ${i} = ${mul}`);
    }
}
multiple(5);