console.log("HelloWorld")

//For a Responsive Nav Bar
function ToggleMenu(){
  var x = document.getElementById("Top-Nav");
  if(x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}


document.getElementById("howds").innerHTML="HI HOWDS ";
