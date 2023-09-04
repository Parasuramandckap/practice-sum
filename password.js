function emailid(input) {

    if(input.length <8){
        console.log("password atleast eight char")
    }
    else if(input.charAt(0) !== input.charAt(0).toUpperCase()){
        console.log("password first latter should be contain one uppercase")
    }
    else if(!input.match("@","_","-","#")){
                console.log("password should be contain one speacial char")

    }
    else if(input.charAt(0).match("@","_","-","#")){
        console.log("first latter cant be speacial char")
    }
    else if(!input.match(1,2,3,4,5,6,7,8,9,0)){
        console.log("password contain one number")
    }
    else{
        console.log("strong password")
    }
}


const capitalizedString = emailid("Parasu@1apt");