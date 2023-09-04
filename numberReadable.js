let input = 20;

if(input == 1){
    console.log(input + "st");
}
else if(input == 2){
    console.log(input+"nd");
}
else if(input == 3){
    console.log(input+"rd");
}
else{
    let lastdigit = input % 10;
    switch (lastdigit) {
        case 1:
            console.log(input+"st");
            break;
        case 2:
            console.log(input+"nd");
            break;
        case 3:
            console.log(input+"nd");
            break;    
        default:
            console.log(input+"th");    
    }
}