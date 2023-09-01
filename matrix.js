
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matrix2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let result = [];


//left and right diagonal 
for(let i=0;i<matrix.length;i++){
    console.log(`left diagonal${matrix[i][i]}`);
    console.log(`right diagonal ${matrix[i][matrix.length-1-i]}`)

}

//get specific column and row
for(let i=0;i<matrix.length;i++){
    for (let j = 0; j < matrix.length-1; j++) {
        
        console.log(matrix[i][j])
        break;
        
    }
}

//add sum to matrix array

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix2.length; j++) {
        result[i] = [];
    }  
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix2.length; j++) {
        result[i][j] = matrix[i][j] + matrix2[i][j];
    }  
}

console.log(result);
