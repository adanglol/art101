console.log("HelloWorld")

//adding a sticky navbar feature within the site
window.onscroll = function() {stickyNav()};
//defining two variables the navbar as well as sticky var for using offsetTop DOM
var navbar = document.getElementById("Flop-Nav");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")

  }
}





//For a Responsive Nav Bar
//For the toggling class to hamburger menu to x on responsive nav
function DropDown(el){
  if (el.className == "fa fa-bars"){
    el.className = "fa fa-times";
  } else if ("fa fa-times"){
    el.className = "fa fa-bars";
  }
}

//Function to make our website responsive
function BurgerMenu(){
  var x = document.getElementById("Top-Nav");
  if(x.className === "nav-bar") {
    x.className += " responsive";
  }else {
    x.className = "nav-bar";
  }
}

//For clock on the website functionality
function showTime(){
  //creating a data instance using new Date() constructor
  var date = new Date();
  //creating a variable for each type of data hour min sec and sessions and calling them with respective function in date instance
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  //fix the clock don't want see zero in getHours
  if (h == 0){
    h=12;
  }
  //non military time >12 then -12 and if greater than 12am then turn to pm
  if (h > 12){
    h -= 12;
    session = "PM"
  }
  //fixing the issue with number less than 10 in digital clock  using ternary operator ? if else statement condition true false
  h = (h<10) ? "0" + h : h;
  m = (m<10) ? "0" + m : m;
  s = (s<10) ? "0" + s : s;
// this is where the time will be stored
  var time = 'You are tuning in at' + ' '+ h + ':' + m + ':' + s +' ' + session + " " + 'PST!';
//adding it to our HTML doc
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").innerContent = time;

  // set timeout
  setTimeout(showTime,1000);
}
//call function
showTime();
