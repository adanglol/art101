// Author : Aaron Dangc
// Created : October 25,2022
// Lab 9 : JavaScript for the Web

console.log("Lab 9 JS has been initialized!")

//Setting our variable to our ID of div in html
var outputEl = document.getElementById("output");
//checking to see if it works in the console
console.log("Selecting our div",outputEl);


var scriptOutput = document.getElementById("head");

scriptOutput.innerHTML = "Another Header"

var paraGraph = document.getElementById("para");
paraGraph.innerHTML = "This is my script output from my lab 9 JS which all content in this div is selected and defined in JavaScript including this paragraph tag."



//creating a p tag
var new1El = document.createElement("p");
//defining content
new1El.innerHTML = "Your Number is " + Math.floor(Math.random()*10) + "!";

//creating a header tag
var new2El = document.createElement("h2");
new2El.innerHTML = "Lucky Number from zero to ten!";


//Setting a class
//Created a button that will change the CSS of header and p tags made
var new3El = document.createElement("button");
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

//Trying to add new element to the top of an element
prePendEl = document.createElement("div");
prePendEl.setAttribute("class","welcome");
prePendEl.innerHTML = "<h1>"+"Script Output" + "</h1>"



//Experimenting with more DOM document methods and attribiutes images,scripts, and getElementsByName() will be what I use

//experiement with images
//declare a variable that tells us how many image element within our HTML DOC
var numImages = document.images.length;
console.log("The number of image tags in our HTML =", numImages)

//Now gonna try loop over each image as well as output the source for each URL (src) experimenting and using w3 schools as reference

//declare an array to loop
const myImages = document.images;
//where we will get our URL need to store
let text = "";
//for loop start at 0 which will be less than num images will increment by one each time and stop when i equal to length of array of images
for (let i = 0; i < myImages.length; i++){
  //index url and src returns value of src attribute and adds it to our variable
  text += myImages[i].src + "<br/>";
}

//Next we will experiment with getElementByClassName()
//returning list of HTML elements that contain the class content within my HTML
const content = document.getElementsByClassName("content");
console.log("Here is list of elements that have the class content =",content);


//Lets make a div to store all of our experimentation within and also output it
var domExp = document.createElement("div");
domExp.setAttribute("class","welcome");
domExp.innerHTML = "<h1>" +"Output for the DOM!"+ "</h1>" + "<br />" + "<h2>"+ "The Source URL for my images in this webpage :"+ "</h2>" + "<br />" + text + "<br />" + "There are" + " " + numImages + " images within this HTML DOC!" + "<br />" + "Here is list of elements that contain the content class within this HTML DOC" + "<br />" + content[0]


var space = document.createElement("h2");
space.innerHTML = "This div contains output for DOM methods,attributes and elements experiment"


//using prepend method to put out div with header first within our div
outputEl.prepend(prePendEl);

//appending our elements we created to our output div
outputEl.appendChild(new2El);
outputEl.appendChild(new1El);
outputEl.appendChild(new3El);

outputEl.appendChild(space);

//Let us append it toward the bottom
outputEl.appendChild(domExp);
