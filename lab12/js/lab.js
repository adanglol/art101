// Author : Aaron Dangc
// Created : 11.02.2022
// Lab 12 : Conditionals

// Create a function sortingHat() that does the following:
// That takes a string as an argument: function sortingHat(str)
// Counts the letters in str and assigns it to a variable length
// Uses modulus (% operator) to get the remainder with 4: mod = length % 4;
// mod will now be a value between 0 and 3
// create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3

function sortingHat(name){
  //Check to see if the input we are getting is string if not return not valid data type
  if (typeof name === "string") {
    console.log("this is a string");
    //if input is string we are going to use length method to count the amount of characters in a string
    length = name.length;
    //Next we are going to declare a variable mod that takes length number of our string and divide it by and then based off that return us string
    mod = length % 4;
    //Create our if statements based on our mod value number which should either be 0,1,2,or 3 and return Gryffindor,Ravenclaw, Slytherin, and Hufflepuff
    console.log("Our value of mod",mod);
    if (mod == 0){
      return "Gryffindor"
    } else if (mod == 1) {
      return "Ravenclaw"
    } else if (mod == 2) {
      return "Slytherin"
    } else if (mod == 3) {
      return "Hufflepuff"
    }
  }else {
    alert("Your input is not a string please try again!");
  };
};
//Select our button add event listener and pass our input field as parameter in our function
button = $("#button").click(function(){
  //select our inputfield and get the value and concatenate output
  var name = $("#input").val();
  console.log(typeof name);
  var house = sortingHat(name);
  var message = "The Sorting Hat has sorted you into" + " " + house;
  //Create a header when output message
  var messageHeader = $("<h1></h1>").addClass("welcome me").html(message);
  //append this message into to our div output\
  $("#output").append(messageHeader);
  $("#output").append("<br/>");
});
