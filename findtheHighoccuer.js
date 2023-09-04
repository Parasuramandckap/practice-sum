let string = "technology";

let result = {};
for (const str of string) {
   result[str] = result[str]+1 || 1;
}



let keys = Object.keys(result);

let max = keys[0];

for (let i = 0; i < keys.length; i++) {
    
    
    if(result[keys[i]] > result[max]){
        max = `{${keys[i]}:${result[keys[i]]}}`
    }
}
console.log(max);