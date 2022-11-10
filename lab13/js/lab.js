// Author : Aaron Dangc
// Created : 11.08.2022
// Lab 13 : Loops

console.log("Lab 13 has been initialized");

// Create a function fizzBuzzBoom that does the following:
// Loops through numbers 1 to 200 listing them as you go
// if number multiple of 3 print fizz
// if number multiple of 5 print buzz
// if number multiple of 7 print boom
// if number is multiple of more than one (3,5,or 7) combine so if 3 and 5 fizz buzz
// Make output to output div

//function takes 2 parameters one is a integer and another is object that contains factors for integer to Check
function fizzBuzzBoom(maxNums,factorObj){
  // iterate over our amount of numbers based on maxNums
  for (var num = 0; num <= maxNums; num++){
    //need to have empty string that will reset everytime we iterate and will be used to output each time
    var outputStr = "";
    //iterate over our factors in factorObj (obtain through user input in HTML)
    for (var factor in factorObj){
      //check to see if num is multiple of each factor in factorObj if so add text to outputStr
      if (num % factor == 0){
        outputStr += factorObj[factor];
      }
    }
    //check to see if we have words in outputStr then format it
    if (outputStr){
      outputStr = "-" + outputStr + "!";
    }
    //output to our HTML
    $("#output").append($("<p></p>").addClass("go").html(num.toString() + outputStr));


  } // close for loop maxNums
}; //function

//select our button in our html and attach an event listener that will call our function and get our values

button = $("#run").click(function(){
  //let us know that the button is working
  console.log("Button has been clicked");
  //if statement to check input on our max value for max nums to loop over (need to add)!


  //initalize our object that will take in values from our HTML
  factorObj = {};
  //Getting Our value from our text boxes and assigning them to our object
  factorObj[$("#num0").val()] = $("#text0").val();
  factorObj[$("#num1").val()] = $("#text1").val();
  factorObj[$("#num2").val()] = $("#text2").val();
  factorObj[$("#num3").val()] = $("#text3").val();
  console.log(factorObj);
  //call our function passing our html value as parameter for maxNums
  fizzBuzzBoom($("#max").val(),factorObj);
});
