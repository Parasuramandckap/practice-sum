

let email  = "parasuraman@gmail.com";
let result = "";
for (let i = 0; i < email.length; i++) {

    if (i > email.indexOf("@") && i < email.indexOf(".")) {
        result += "*"
    }
    else{
        result += email[i]
    }   
}

console.log(result);