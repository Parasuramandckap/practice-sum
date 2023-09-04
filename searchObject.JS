let array = ([
    {product_id:1,product_name:"soap", category: "home"},
    {product_id:2,product_name:"screwdriver", category: "industry"},
    {product_id:3,product_name:"jeans", category: "clothers"}
  ]) 
    
    
  function search(array,search)
  {
      for(let i=0;i<array.length;i++){
          if(array[i].product_name == search){
              console.log(array[i])
          }
      }
  }
  search(array,"soap")