// Author : Aaron Dangc
// Created 10.26.2022
// Lab 10 : JavaScript Events and Forms

//initalize to check if the script is link
console.log("Lab 10 js has been initialized");

//define our Sort function here from Lab7 since dont wanna mess with it in previous lab
function caseInsensitive(strA,strB){
  return strA.toLowerCase().localeCompare(strB.toLowerCase());
}
function sortName(userName){
  console.log("username =", userName);
  userName = userName.split("").sort();
  userName = userName.sort( caseInsensitive );
  userName = userName.join("");
  return userName.replace(/\s/g, ' ');
}



//Going to use the sort Name function inside of my lab 7  js by calling it
//declare a variable to select our button
myButn = document.getElementById("my-button");
console.log("My button =", myButn);

//Now lets add event listener as well as putting together getting value of inputBox
myButn.addEventListener("click",wordSort);

//After declaring selecting our butn as varaible now attach a event listener that :
//1. Takes value of input field
//2. Returns that value through sort() function and saves Results
//3. replace html in div with output with results
//define our function that does this
lineBreak = document.createElement("br");
function wordSort(){
  //getting the value of our input box by declaring variable and using value method
  var inputBox = document.getElementById("user-name").value;
  console.log(sortName(inputBox));
  var sortInputBox = sortName(inputBox);

  //Create a node for appendChild to work put our sorted input in the element to output
  inputNode = document.createElement("div");
  inputNode.setAttribute("class","welcome");
  inputNode.innerHTML = "<h1>"+ "SortedName : "+sortInputBox +"</h1>";
  console.log(inputNode)

  //Selecting our output div and outputting
  outputEl = document.getElementById("output");
  outputEl.appendChild(inputNode);
  //Adding line break after each input displays output message
  outputEl.appendChild(lineBreak);

  //return those additional text fields
  var f1 = document.getElementById("field-one").value;
  var f2 = document.getElementById("field-two").value;
  var f3 = document.getElementById("field-three").value;

  inputNodeOne = document.createElement("div");
  inputNodeOne.setAttribute("class","welcome");
  inputNodeOne.innerHTML = "<h1>"+f1+"</h1>";
  outputEl.appendChild(lineBreak);
  outputEl.appendChild(inputNodeOne);
  outputEl.appendChild(lineBreak);

  inputNodeTwo = document.createElement("div");
  inputNodeTwo.setAttribute("class","welcome");
  inputNodeTwo.innerHTML = "<h1>"+f2+"</h1>";
  outputEl.appendChild(lineBreak);
  outputEl.appendChild(inputNodeTwo);
  outputEl.appendChild(lineBreak);

  inputNodeThree = document.createElement("div");
  inputNodeThree.setAttribute("class","welcome");
  inputNodeThree.innerHTML = "<h1>"+f3+"</h1>";
  outputEl.appendChild(lineBreak);
  outputEl.appendChild(inputNodeThree);
  outputEl.appendChild(lineBreak);
}

// Lets change up aspects of our page by starting with the first button we created in the resuits div

//First Button

firstGlitch = document.getElementById("glitchButt");
console.log("This is my first glitch button!",firstGlitch);

//need add an event listener so when the user clicks the button
firstGlitch.addEventListener("click",glitchButt);

//after clicking call function make it glitchButt
function glitchButt(){
  console.log("glitchButt Has been called");
  alert("You are Entering the MainFrame...");
  document.writeln("---");
  //HelloWorld within our glitched / rewrtiten page
  helloWorld = document.createElement("h1");
  helloWorld.innerHTML = "HELLO WORLD";
  helloWorld.style.color = "white";
  //text
  text = document.createElement("p");
  text.innerHTML = "An iconic word phrase for every programmer. The start of ones journey to becoming an amazing one. A simple string of text printed in the programming language that the programmer is using. Which in due time they will learn new things and make something that they ever wanted to make with the power of code and a creative mind one line at a time.";
  text.style.color = "white";
  text.style.fontSize = "20px"
  //video
  video  = document.createElement("iframe");
  video.style.display = "block";
  video.style.padding = "20px";
  video.src = "https://www.youtube.com/embed/Yw6u6YkTgQ4?";
  video.height = "400";
  video.width = "1000";
  console.log(video);
  document.writeln("---");
  document.body.appendChild(lineBreak);
  document.body.appendChild(helloWorld);
  document.body.appendChild(lineBreak);
  document.body.appendChild(text);
  document.body.appendChild(lineBreak);
  document.body.appendChild(video);
  document.body.style.backgroundImage = "url('img/mainhack.gif')";
  document.body.style.backgroundRepeat = "repeat";
}

//Second Button change the background of our page

secGlitch = document.getElementById("glitchButtTwo");
console.log("This is my second button that glitches or messes with the page elements", secGlitch);
console.log(secGlitch);

//add an event listener so when someone clicks on it
secGlitch.addEventListener("click",glitchTwo);

//create the function that messes with our page
function glitchTwo(){
  document.body.style.backgroundImage = "url(img/face.gif)";
  document.body.style.backgroundRepeat = "repeat";
}


//Third button

thrGlitch = document.getElementById("glitchButtThree");
console.log(thrGlitch);

//add event listerne when user clicks button
thrGlitch.addEventListener("click",changeCont);

function changeCont(){
  //Adding and replacing our first image in lab 10
  colTwo = document.getElementById("theImg");
  firstImg = document.getElementById("firstImg");
  firstImg.remove();
  newImg = document.createElement("img");
  newImg.src = "img/GO.gif";
  console.log(newImg);
  colTwo.appendChild(newImg);
  //Onto the next image
  colFour = document.getElementById("nexImg");
  secImg = document.getElementById("second");
  secImg.remove();
  newImg2 = document.createElement("img");
  newImg2.src = "img/pochi-pochita.gif"
  colFour.appendChild(newImg2);
  //Add another image jojo
  colOne = document.getElementById("col1img");
  document.getElementById("head").remove();
  document.getElementById("break").remove();
  document.getElementById("pcon").remove();
  thrImg = document.createElement("img");
  thrImg.src = "img/jojo-jotaro.gif";
  colOne.appendChild(thrImg);
  // code geass
  colThree = document.getElementById("colthrImg");
  document.getElementById("headtwo").remove();
  document.getElementById("breaktwo").remove();
  document.getElementById("pconTwo").remove();
  fourImg = document.createElement("img");
  fourImg.src = "img/stare.gif";
  colThree.appendChild(fourImg);






}
