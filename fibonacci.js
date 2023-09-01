

let number = 10;

// function fibonacci(number){
//     if(number < 2){
//         return  number;
//     }
//     else{
//         return fibonacci(number-1) + fibonacci(number-2)
//     }
// }


// for(let i = 0; i < number; i++) {
//     console.log(fibonacci(i));
// }



function fibonacci(number){
    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= number; i++) {
        console.log(a)
        c = a+b;
        a=b;
        b=c;     
    }
}
fibonacci(10);