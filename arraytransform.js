

var map = function(arr, fn) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
    return result;
};

map([1,2,3,4],felo)

function felo(params) {
    console.log(params);
}