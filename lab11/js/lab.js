// Author : Aaron Dangc
// Created 10.31.2022
// Lab 11 : Libraries and jQuery

//select our div with Challenges
challenge = $(".col-one");
//create button for our challenges div also giving it our CSS from lab 9 as well as event listener
challBut = $('<button>Click Me!</button>').addClass("button").click(function(){
  //toggle class for our div
  challenge.toggleClass("special");
  //lets also define our other div and make it toggle when we click our challenge button
  challSide = $(".col-two");
  challSide.toggleClass("special");
  });
//Append our button to our Challenges div
challenge.append(challBut);

//Now lets select our Problems div and create our Button and append like what we did with challenges
problem = $(".col-three");
probButt = $('<button>Click Me!</button>').addClass("button").click(function(){
  problem.toggleClass("special");
  probSide = $(".col-four");
  probSide.toggleClass("special");
});
problem.append(probButt);

//Now lets do this with our Results div
results = $(".col-five");
resultsButt = $('<button>Click Me!</button>').addClass("button").click(function(){
  results.toggleClass("special");
  resultSide = $(".col-six");
  resultSide.toggleClass("special");
});
results.append(resultsButt);
