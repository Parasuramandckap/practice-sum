

function reverse(params) {
    let string = params.toString();
    let revered = string.split("").reverse().join("")
    let output = parseInt(revered)
    return output;
}
console.log(reverse(1222));