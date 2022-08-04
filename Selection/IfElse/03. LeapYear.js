const prompt= require("prompt-sync")();

var year;
year=prompt("Enter any year: ");
if(((year%4==0) && (year%100!=0)) || (year%400==0)){
    console.log("Year is Leap year!");
}
else{
    console.log("Year is not Leap year!");
}