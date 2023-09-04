// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for(let a of str.toLowerCase()){
        if(vowels.includes(a)){
            count++
        }
    }
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);



function a(a)
{
    let result = 0;
    let vowles = ["a","e","i","o","u"]
    for(let i=0;i<a.length;i++){
      if(vowles.includes(a[i])){
         result++
      }
    }
    return result;
}

console.log(a("morning"))