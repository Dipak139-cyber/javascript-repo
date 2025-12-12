function fibonic(){
    let a = 0;
let b = 1;

    for (let i = 1; i <= 10; i++) {
            let temp=a+b;
            a=b;
            b=temp;
            console.log(b)

}

    }

fibonic()