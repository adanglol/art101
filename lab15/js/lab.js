// Author : Aaron Dangc
// Created : 11.22.2022
// Lab 15 : AJAX


//add a click event to our button in our output div
$("#activate").click(function (){
  console.log("The button has been clicked");

  //using ajax method with jquery to get some data from the pokemon api
  //declaring a variable to call our API
  var pokeApi = $.ajax({
    url : "https://pokeapi.co/api/v2/",
    method : "GET",
    datatype : "JSON",
  });

//if our api works call a function we are interested in getting some information of some pokemons
pokeApi.done(function(data){
  console.log("API has been successfully implemented here is some data to show that it is working!", data["ability"]);
  //Now that our API is working lets try to access this beatiful data using ajax and passing our data from the api
  var thePokemons = $.ajax({
  url : data["pokemon"] + "?limit=151", //Limit to how many pokemon to show 151 is all generation 1 kanto pokemon
  method : "GET",
  datatype : "JSON",
  })

//To see if it works run a function that prints whatever is inside pokeapi/pokemon prints first 20 pokemon in our console
thePokemons.done(function(data){
  for (var num = 0; num < 151; num++){
      $("#output").append(data["results"][num]["name"] + "<br />");
  }
})
}) //closing tag function and event listener
//test case if api fails
pokeApi.fail(function(request,error){
  console.log(request,error);
});
});
