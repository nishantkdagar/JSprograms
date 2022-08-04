const prompt =require("prompt-sync")();

var day,month;
day=prompt("Enter day of the month: ");
month=prompt("Enter month of the year: "); 

console.log("Date: ",day,"/",month);
if ((day >=20 && month>=3) || (day<=20 && month<=6) ){
    console.log("True");
}
else console.log("False");