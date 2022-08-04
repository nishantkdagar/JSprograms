let num1=Math.floor(Math.random()*(999-100)+100);

let num2=Math.floor(Math.random()*(999-100)+100);

let num3=Math.floor(Math.random()*(999-100)+100);

let num4=Math.floor(Math.random()*(999-100)+100);

let num5=Math.floor(Math.random()*(999-100)+100);


console.log("First number : "+num1);
console.log("Second number: "+num2);
console.log("Third number : "+num3);
console.log("Fourth number: "+num4);
console.log("Fifth number : "+num5);
console.log("------------------")

min = num1;
if (num2 < min) {min = num2};
if (num3 < min) {min = num3};
if (num4 < min) {min = num4};
if (num5 < min) {min = num5};
console.log("Minimum number is = " + min);
max = num1;
if (num2 > max) {max = num2};
if (num3 > max) {max = num3};
if (num4 > max) {max = num4};
if (num5 > max) {max = num5};
console.log("Maximum number is = " + max);