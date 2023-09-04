

let counter = function(a){
    return function (){
        return a++
    }
}

let count = counter(10)

console.log(count())
console.log(count())


