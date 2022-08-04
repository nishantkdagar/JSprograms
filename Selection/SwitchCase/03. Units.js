const prompt= require("prompt-sync")();
number = parseInt(prompt("Enter a number: "));
switch (number){
    case 1:
        console.log("Ones");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default :
        console.log("Enter Less tha Lakh");
}