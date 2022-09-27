console.log("HelloWorld")

//For a Responsive Nav Bar

function DropDown(el){
  if (el.className == "fa fa-bars"){
    el.className = "fa fa-times";
  } else if ("fa fa-times"){
    el.className = "fa fa-bars";
  }
}

function BurgerMenu(){
  var x = document.getElementById("Top-Nav");
  if(x.className === "nav-bar") {
    x.className += " responsive";
  }else {
    x.className = "nav-bar";
  }
}
