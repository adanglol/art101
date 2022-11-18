// Author : Aaron Dangc
// Created 11.17.2022
// Lab 16 : JSON and APIs

console.log("Lab 16 js has been initialized");
// This will append random images of the compic from API to make button on my HTML to Work for results DIV


//add event listener to our button
$("#comic").click(function(){
  // generate a random number from 0 - 2699 because there are that many within the comic book API
  num = Math.floor(Math.random() * 2700);
  //if statement to check for 0 and assign new number becuase 0 is not in the API
  if (num == 0){
    console.log("0 does not exist within api")
    num = Math.floor(Math.random() * 2700);
    console.log(num);
  }else{
    //if number not 0 we can now initiate our API
    var comicObj = $.ajax({
      url: "https://xkcd.com/" + num + "/info.0.json",
      method: "GET",
      datatype: "JSON",
    });
    //If API works call this function
    comicObj.done(function(data){
      console.log("API has been successfully implemented here is some data", data);
      //create a link to images reference off API
      //append title and images to our output div onto our homepage using this API and object methods
      $("#output").append($("<h1></h1>").html("Comic Name : " + data.title));
      $("#output").append("<br />");
      $("#output").append("<br />");
      $("#output").append($('<img src="#" alt="Comic_Image" title="#" id = "cool"/>').attr('src',data.img).attr('alt',data.alt).attr('title',data.safe_title).height(500).width(500));
      $("#output").append("<br />");
      $("#output").append("<br />");
      $("#output").append("<hr />");

      });
    //if API fails
    comicObj.fail(function(request,error){
      console.log(request,error);
    });
  };
});


// TASK X BONUS MAKING THE LAB ABLE TO NAVIGATE THROUGH EACH COMIC with two buttons code before randomly appends a comic from API

linkNum = 1
bonusComicObj = $.ajax({
  url:"https://xkcd.com/" + linkNum + "/info.0.json",
  method:"GET",
  datatype:"JSON",
});
//if Our API is successfully implemented
bonusComicObj.done(function(data){
  console.log("API",data);
  //Append the first image of API
  $("#output").prepend($('<img src="" alt="" id="butImg" />').attr('src',data.img).width(500).height(500))
  $("#output").prepend($('<p id ="year"></p>').html(data.year));
  $("#output").prepend($('<h1 id ="title"></h1>').html(data.title));
  $("#output").append("<br />");
  $("#output").append("<hr />");

  //Let us add event listeners to both our buttons to be able to navigate through different comcics

  $("#previous").click(function(){
    if (linkNum == 1){
      alert("This is where first comic in the API starts cannot go back");
    }else {
      linkNum -=1
      //Get API info
      newComic = $.ajax({
        url:"https://xkcd.com/" + linkNum + "/info.0.json",
        method:"GET",
        datatype:"JSON",
      });

      newComic.done(function(data){
        $("#title").html(data.title);
        $("#year").html(data.year);
        $("#butImg").attr('src',data.img);
      });
    }

  });

  $("#next").click(function(){
    if (linkNum == 2699){
      alert("There are no more comics available within the API");
    } else {
      linkNum +=1
      newComicNext = $.ajax({
        url:"https://xkcd.com/" + linkNum + "/info.0.json",
        method:"GET",
        datatype:"JSON",
      });
      newComicNext.done(function(data){
        $("#title").html(data.title);
        $("#year").html(data.year);
        $("#butImg").attr('src',data.img);
      });
    }
  });
});





//If our API FAILS
