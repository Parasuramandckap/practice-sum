// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    for(let i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

console.log(generateString(5));