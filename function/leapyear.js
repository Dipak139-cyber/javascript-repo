function year(a){
    if(a%400==0){
        console.log("leap year")
    }
    else if(a%4==0 && a%100!=0){
        console.log("leap year")
    }
    else{
        console.log("not leap year")
    }
}
year(1900)