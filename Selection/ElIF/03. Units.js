const prompt = require("prompt-sync")();
num = prompt("Enter number to check unit: ");
if(num == 1 ){
    console.log("Unit");
} else if (num == 10) {
    console.log("Tens");
} else if (num == 100) {
    console.log("Hundred");
} else if (num == 1000) {
    console.log("Thousand");
} else if (num == 10000) {
    console.log("Ten Thousand");
} else {
    console.log("I can only calculate till Ten Thousands");
}