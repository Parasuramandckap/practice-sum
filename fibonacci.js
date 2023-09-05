

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


// function create_fib(num){
//     if(num<2){
//         return num;
//     }
//     else{
//         return create_fib(num-1) + create_fib(num-2)
//     }
// }

// for (let i = 0; i < 5; i++) {
//     console.log(create_fib(i));
// }