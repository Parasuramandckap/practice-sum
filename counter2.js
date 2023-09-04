var createCounter = function(x) {
    let currentValue = x;

    return{
               increment: function() {
                  currentValue++
                  return currentValue;
                },
                reset: function(){
                    return currentValue = x;
                },
                decrement:function(){
                    currentValue--
                    return currentValue;
                }
        }
};

let counter = createCounter(10);

console.log(counter.increment());
console.log(counter.reset());