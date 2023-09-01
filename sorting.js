
// Selection Sort

// function selectionSort() {

//     const arr=[2,8,1,0,45,23,890,5,1];

//     let n=arr.length;
//     let min_index;

//     for(i=0;i<n-1;i++)
//     {

//         for(j=i+1;j<=n-1;j++)
//         {
            
//            if(arr[j] < arr[i])
//            {
//              min_index = j;

//              break;
            
//            }
//         }
//         if(min_index != i){
//             let temp = arr[min_index];
//             arr[min_index] = arr[i];
//             arr[i] = temp;
//         }  

//         // // console.log(arr);
//     }
//     // console.log("Selection Sorted Array is : "+arr);
    
// }
// selectionSort()
// BUBBLE SORT

function bubbleSort()
{
    const arr = [10,67,567,22,1,87,1908,367];

    let n = arr.length;


    for(i=0;i<n-1;i++)
    {
        for(j=0;j<n-1-i;j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("BUBBLE Sorted Array : "+arr);


}
bubbleSort()




