// Author: Aaron Dangc
// Created: 10.18.2022
// Lab 7 : Functions


//function is for case insenstives whether lower or upper
function caseInsensitive(strA,strB){
  //console.log(strA.toLowerCase().localeCompare(strB.toLowerCase())) // DEBUG
  //used to check strA and strB which are both strings for username to check sort order in this case will return a 1 after since strA been sorted before strB from sortName function
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

var userName = window.prompt("Hi please tell me your name so I can fix it! ", "human");
// function that returns our Users sorted new Name
function sortName(){
  //Declare a variable called userName that uses window.prompt() to prompt user to type their user name and get that information

  //lets see our changes to see if this works within the console
  console.log("username =", userName);

  //First we need to take our input which is a string and turn to array then sort it
  userName = userName.split("").sort();
  //console.log(userName);
  //After we take same input and run it thorugh caseinsenstive function as well as making sure it sorts out upper and lower case letter together
  userName = userName.sort( caseInsensitive );
  //console.log(userName);
  //Concatenate our input
  userName = userName.join("");
  //Output
  return userName.replace(/\s/g, ' ')

}

//Created a div within our JS
var div = document.createElement('div');

//Set attribute and give it a class of our linked CSS
div.setAttribute('class','box');
//Then we define content wihtin our div which is our function and script output
div.innerHTML = "<h1>" + "Oh hey I've fixed your name: " + sortName() + "</h1>";

//Append it to our div in my layout
document.getElementById("script").appendChild(div);
