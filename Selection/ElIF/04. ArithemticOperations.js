const prompt = require("prompt-sync")();
var a = parseFloat(prompt("Enter first number: "));
var b = parseFloat(prompt("Enter second number: "));
var c = parseFloat(prompt("Enter third number: "));

let op1 = parseFloat(a + b * c);
let op2 = parseFloat(a % b + c);
let op3 = parseFloat(c + a / b);
let op4 = parseFloat(a * b + c);
console.log("Result of 'a + b * c' is: "+op1);
console.log("Result of 'a % b + c' is: "+op2);
console.log("Result of 'c + a / b' is: "+op3);
console.log("Result of 'a * b + c' is: "+op4);

let min = 0;
let max = 0;
if (op1<op2 && op1<op3 && op1<op4) {
    min = op1
}
else if (op2<op3 && op2<op4) {
    min = op2;
}
else if (op3<op4) {
    min = op3;
}
else{
    min = op4;
}

if (op1>op2 && op1>op3 && op1>op4) {
    max = op1;
} else if (op2>op3 && op2>op4) {
    max = op2;
} else if (op3>op4) {
    max = op3;
} else {
    max = op4;
}
console.log("Smallest is: "+min);
console.log("Laregest is: "+max);