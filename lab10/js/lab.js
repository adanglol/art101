// Author : Aaron Dangc
// Created 10.26.2022
// Lab 10 : JavaScript Events and Forms

//initalize to check if the script is link
console.log("Lab 10 js has been initialized");

//define our Sort function here from Lab7 since dont wanna mess with it in previous lab
function caseInsensitive(strA,strB){
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
}
function sortName(userName){
  console.log("username =", userName);
  userName = userName.split("").sort();
  userName = userName.sort( caseInsensitive );
  userName = userName.join("");
  return userName.replace(/\s/g, ' ');
}


//Going to use the sort Name function inside of my lab 7  js by calling it
//declare a variable to select our button
myButn = document.getElementById("my-button");
console.log("My button =", myButn);

//Now lets add event listener as well as putting together getting value of inputBox
myButn.addEventListener("click",wordSort);

//After declaring selecting our butn as varaible now attach a event listener that :
//1. Takes value of input field
//2. Returns that value through sort() function and saves Results
//3. replace html in div with output with results
//define our function that does this
function wordSort(){
  //getting the value of our input box by declaring variable and using value method
  var inputBox = document.getElementById("user-name").value;
  console.log(sortName(inputBox));
  var sortInputBox = sortName(inputBox);

  //Create a node for appendChild to work put our sorted input in the element to output
  inputNode = document.createElement("div");
  inputNode.setAttribute("class","welcome");
  inputNode.innerHTML = "<h1>"+ sortInputBox +"</h1>";
  console.log(inputNode)

  //Selecting our output div and outputting
  outputEl = document.getElementById("output");
  outputEl.appendChild(inputNode);
  //Adding line break after each input displays output message
  lineBreak = document.createElement("br");
  outputEl.appendChild(lineBreak);

}
