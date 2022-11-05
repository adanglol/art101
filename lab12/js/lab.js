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
    //condensing our code
    houseArray = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
    return houseArray[mod];
  }else {
    alert("Your input is not a string please try again!");
  };
};
//Select our button add event listener and pass our input field as parameter in our function
button = $("#button").click(function(){
  //select our inputfield and get the value and concatenate output
  var name = $("#input").val();
  console.log(typeof name);
  // Our varaible that runs functions and returns house name
  var house = sortingHat(name);
  var message = "The Sorting Hat has sorted you into" + " " + house + "!";
  //Create a header when output message
  var messageHeader = $("<h1></h1>").addClass("welcome me").html(message);
  //append this message into to our div output\
  $("#output").append(messageHeader);
  $("#output").append("<br/>");

  //Set up an array with each house description and index it off of mod
  //Description is from the harry potter fandom 0 1 2 3 griff raven sly huffle
  const houseDescribe = [

    "Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, nerve and determination, to be sorted into his house."

  ,"Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours. The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena."

  ,"Slytherin was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition."

  ,"Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members"
];
  //Append the description to our HTML lets create a paragraph tag while we are at it

  //set up a if condition based off the value of our mod the text box will have the color same color as house
  classname = ["gryffindor","ravenclaw","slytherin","hufflepuff"];
  classStyle = classname[mod];
  console.log(classStyle);
  var paragraph = $("<p></p>").html(houseDescribe[mod]).addClass("content "+ classStyle );
  $("#output").append(paragraph);

  //After appending an paragraph with house description also wanted to add image of respective house
  //first we need an array of the url of images
  arrayImgUrl = ["img/gryffindor.gif","img/ravenclaw.gif","img/slytherin.gif","img/hufflepuff.gif"];
  indexImg = arrayImgUrl[mod];
  var img = $("<img/>").attr("src",indexImg).height(300).width(200);
  $("#output").append(img);

});
