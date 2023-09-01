

let array = [1,1,2,3,3]


let result = [];
for (let i = 0; i < array.length; i++) {
    if(result.indexOf(array[i]) === -1){
        result.push(array[i])
    }
}

console.log(result);