// Author: Aaron Dangc
// Created: 10.18.2022
// Lab 7 : Functions


// We need to declare a function that functions to take user input
function sortName(){
  //Declare a variable called userName that uses window.prompt() to prompt user to type their user name and get that information
  var userName = window.prompt("Hi please tell me your name so I can fix it! ", "human");
  //lets see our changes to see if this works within the console
  console.log("username =", userName);


  //returned a variable nameSorted which is the new name that is being outputted which is scrambled up version
  return nameSorted = userName.split("").sort().join("").toLowerCase();

  //Debugging purposes
  //console.log(nameSorted);

}

//More debugging on Output HTML
//sortName();
//console.log(nameSorted);

//Outputing our function in our HTML
document.writeln("Oh hey I've fixed your name: ",sortName(),"<br />");
