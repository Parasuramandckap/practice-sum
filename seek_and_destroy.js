


function a(a,n1,n2)
{
    let result = [];
    for(let i=0;i<a.length;i++){
       if(a[i] != n1 && a[i] != n2){
           result.push(a[i])
       }
    }
    return result;
}

console.log(a([2,3,4,5,6,"hello"],2,6))