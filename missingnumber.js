

let array = [5],count=5;

let result = [];
for (let i = 0; i < array.length; i++) {
   for (let j = 1; j <=count; j++) {
        if(array[i] != j){
            result.push(j)
        }
   } 
}
console.log(result);