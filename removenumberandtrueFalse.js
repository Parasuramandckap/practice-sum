let array = [1,3,true,false, "hello", "world"];
let result = []


for(let i=0;i<array.length;i++){
    if(typeof(array[i]) != "number"){
        if(array[i] == true){
            result.push(1)
        }else if(array[i] == false){
            result.push(0)
        }
        else{
            result.push(array[i].toUpperCase())
        }
    }
}

console.log(result)