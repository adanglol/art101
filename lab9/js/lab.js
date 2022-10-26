// Author : Aaron Dangc
// Created : October 25,2022
// Lab 9 : JavaScript for the Web

console.log("Lab 9 JS has been initialized!")

//Setting our variable to our ID of div in html
var outputEl = document.getElementById("output");
//checking to see if it works in the console
console.log("Selecting our div",outputEl);


var scriptOutput = document.getElementById("head");

scriptOutput.innerHTML = "Script Output"

var paraGraph = document.getElementById("para");
paraGraph.innerHTML = "This is my script output from my lab 9 JS which all content in this div is selected and defined in JavaScript including this paragraph tag."



//creating a p tag
new1El = document.createElement("p");
//defining content
new1El.innerHTML = "Your Number is " + Math.floor(Math.random()*10) + "!";

//creating a header tag
new2El = document.createElement("h2");
new2El.innerHTML = "Lucky Number from zero to ten!";


//Setting a class
//Created a button that will change the CSS of header and p tags made
new3El = document.createElement("button");
new3El.innerHTML = "Click Me!";
new3El.setAttribute("class","button");

//styling our made elements in javaScript using an onclick event in anon function
new3El.onclick = function(){
  new2El.style.color = "#e3cfcf";
  new1El.style.fontSize = "xx-large";
  new1El.style.color = "#e3cfcf";
  paraGraph.style.fontSize = "xx-large";
  paraGraph.style.color = "#e3cfcf";
};

outputEl.appendChild(new2El);
outputEl.appendChild(new1El);
outputEl.appendChild(new3El)
