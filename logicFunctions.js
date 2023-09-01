//  FIZZBUZZ 
function fizzBuzz() {

    for(var i=1;i<=100;i++)
    {
   
        // execution time 234ms
        if(i%3 == 0 || i%5 == 0)
        {
            if(i%3 == 0 && i%5 == 0)
            {
                console.log("FizzBuzz");
            }else if(i%3 == 0)
            {
                console.log("Fizz");
            }else
            {
                console.log("Buzz");
            }
        }
        else
        {
          console.log(i);
        }
    
          // execution time 469ms
          /* if(i%3 == 0 && i%5 == 0)
            {
                console.log("FizzBuzz");
            }else if(i%3 == 0)
            {
                console.log("Fizz");
            }else if(i%5 == 0)
            {
                console.log("Buzz");
            }else {
               console.log(i);
            } */
   
    }
   }

// SWAP without third variable
function swap(a,b) {

    console.log("Before swap a : "+a+" b : "+b)
    a=a+b;
    b=a-b;
    a=a-b;

    console.log("after swap a : "+a+" b : "+b);

}


function stringFrequency()
{
    let str = prompt("Enter the String : ");

    let valid = (str == "" || str == " " || str.trim().length == 0) ? false : true;

    console.log(valid);
    // console.log("str length : "+str.length);
    // console.log("str length after trim : "+str.trim().length);
    if(valid)
    {
        let frequencyObj = new Object();
        let strArr = str.split("");
        let strlen = str.length;

        // console.log("str length : "+strLen);

        let highestFrequency = 1;

        for(i=0;i < strlen;i++)
        {
            let eachCount = 1;
            
            for(j=i+1;j < strlen; j++)
            {
                if(strArr[i] == strArr[j])
                {
                    eachCount += 1;
                    frequencyObj[strArr[i]] = eachCount;
                    strArr.splice(j,1);
                    strlen--;
                    j--;
                }
                if(eachCount > highestFrequency)
                {
                    highestFrequency = eachCount;
                }
            }
            if(eachCount == 1)
            {
                frequencyObj[strArr[i]] = eachCount;
            }
        }

        let high_Freq_Array = new Array();

        console.log("str arr length : "+strArr.length);
        for(i=0; i < strArr.length ; i++)
        {
            console.log(strArr[i]+" : "+frequencyObj[strArr[i]]);

            if(frequencyObj[strArr[i]] == highestFrequency)
            {
                high_Freq_Array.push(strArr[i]);
            }
        }

        console.log(`Highest frequency characters : ${high_Freq_Array}`);
        
    }
    else {
        alert(`INVALID --- please enter a valid string`);
    }
}


function palindrome()
{
    let str = prompt("Enter a string or number : ");
    let strlen = str.length;

    let valid = (str == "" || str == " " || str.trim().length == 0) ? false : true;


    // console.log("string trim length : "+str.trim().length);
    // console.log(`valid ${valid}`);

    if(valid)
    {
        let palindrome = false;
        for(i=0;i<strlen/2;i++)
        {
          if(str[i] == str[strlen - 1 - i])
          {
            palindrome = true;
            break;
          }
        }
        if(palindrome)
        {
            alert(`${str} is a palindrome`);
        }
        else {
            alert(`${str} is not a palindrome`);
        }
    }
    else 
    {
        alert("INVALID Input - please enter a valid input");
    }
   
}

function fibonacci()
{

    let count = parseInt(prompt("Enter the number of for a fibonacci series : "));
    let a = 0;
    let b = 1;
    let c = a+b;
    console.log(a);
    for(i=0;i<count;i++)
    {
        console.log(c);
        c = a+b;
        a = b;
        b = c;
    }

}

function sortOneLoop()
{
    
    let arr = [110,23,14,55,4,18,1,3,5,98,108];

    // let inputValue = prompt("Enter number array : ");

    // let inputArr = inputValue.split(",");

    // let arr = new Array(inputArr);

    console.log(arr);
    let len = arr.length;

    let temp;

    for(let i = 0 ; i < (len-1) ; i++)
    {
        if(arr[i] > arr[i+1])
        {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

            i = -1;
        }
    }

    console.log("Final Array : "+arr);

}

function primeNumber()
{
    let num = parseInt(prompt("Enter a number : "));
    let prime = true;

    let valid = (num == "" || num == " " || isNaN(num)) ? false : true;

    console.log("num : "+num+" "+isNaN(num));

    if(valid)
    {
        for(i=2 ; i <= num/2 ; i++)
        {
            if(num%i == 0)
            {
                prime = false;
                break;
            }
        }
        if(prime)
        {
            alert(`${num} is a prime number`);
        }
        else {
            alert(`${num} is not a prime number`);
        }
    }
    else{
        alert("INVALID INPUT - Please enter a valid number");
    }
}