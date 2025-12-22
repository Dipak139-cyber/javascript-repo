function mark(score){
    if(score>=90){
        console.log("A+");
    }
    else if(score<90 && score>=80){
        console.log("A");
    }
    else if(score<80 && score>=70){
        console.log("B+")
    }
    else if(score<70 && score>=60){
        console.log("B");
    }
    else if(score<60 && score>=50){
        console.log("C+");
    }
    else if(score<50 && score>=40){
        console.log("D+");
    }
    else{
        console.log("Fail");
    }
}
mark(89)