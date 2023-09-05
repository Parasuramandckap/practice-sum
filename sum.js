

function sum(params) {
    if(params === 0){
        return params;
    }
    else{
        return params+sum(params-1)
    }
}
let result = sum(10)
console.log(result);


let a = 10;
let result2 = 0;
for (let i = a; i>0; i--){
    result2+=i
}
console.log(result2)