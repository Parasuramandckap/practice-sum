const arr=[2,8,1,0,45,23,890,5,1];

for(let i=0;i<arr.length-1;i++){
    
    for(let j=i+1;j<arr.length-1;j++){
        if(arr[i] > arr[j+1]){
            let temp = arr[i];
            arr[i] = arr[j+1]
            arr[j+1] = temp 
        }
    }
}

console.log(arr);