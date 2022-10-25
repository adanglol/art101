// Author : Aaron Dangc, Wei-Yan Chiang
// Created : 23 October 2022
// Lab 8 : Anon Functions and Callbacks

//Created an array of numbers
const listNum =[1,2,3,4,5,6,7,8,9,10];
//show array in console
console.log("My array of numbers" , listNum);

//Created a function that takes number and squares it
function numSquared(x){
  var results = Math.pow(x,2);
  return results;
}

// Test out function and show results in our console with some numbers
console.log("The sum of squaring 2 is equal to ",numSquared(2));
console.log("The sum of squaring 4 is equal to ",numSquared(4));
console.log("The sum of squaring 6 is equal to ",numSquared(6));


// Using map function to apply our numSquared function to whole array we created listNum
listNum.map(numSquared);
//make sure it works and output on our console
console.log("Shows our listNum squared", listNum.map(numSquared));

//Now use new function as callback to map onto array
//this function is determine whether number is even by diving it by 2 evenly with no remainder

var isresult = listNum.map(function isEven(x){
  var results = (x % 2 == 0);
  return results;
})

//output this in our console to ensure it works
console.log("Checking whether from listNum if whether each number is even or odd", listNum.map(function isEven(x){
  var results = (x % 2 == 0);
  return results;
}));

//Implementing some() method that uses callback on listNum check to see if any elemnent is greater than or equal to 11 will return false since out list is listNum = 1-10 and is not greater or equal to 11 used anon functions
var isGreatResult = listNum.some(function (x){
  return x >= 11;
})
console.log(isGreatResult);

//Implement a function that accepts a callback function as a parameter and make something happen

//this will be our call back function will print in console

//define callback function that prints 123 in list
function callBack(){
  numList = [1,2,3];
  console.log(numList);
}

//function calls takes x as function as parameter
function call(x){
  x();
}

//function that calls our call back function to print 123 first passes through call function to make our parameter a function to call
function acceptsCallback(x){
  call(x);
}

acceptsCallback(callBack);

//output our results from this script to our HTML
var outputEl = document.getElementById("output");
outputEl.innerHTML = "<h1>" + "Script Output" + "</h1>" + "<br />" + "listNum = " + listNum + "<br />"+ "<br />" + "listNum (Each Element Squared) = " + listNum.map(numSquared) + "<br />"+"<br />" + "Checking each element in listNum to see if even = " +"[" + isresult + "]" + "<br />" + "<br />" + "Checking to see if any element in listNum is greater than or equal to 11 =" + "<h1>" + isGreatResult + "</h1>"
