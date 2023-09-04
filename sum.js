

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