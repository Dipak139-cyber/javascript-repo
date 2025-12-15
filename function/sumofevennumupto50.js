function sumevenupto50(n){
    let sum=0;
    for(i=1;i<=50;i++){
        if(i%2==0){
           sum=sum+i;
        }
    }
    console.log(sum)
}
sumevenupto50(50);