// Author: Aaron Dangc , Wei-Yan Chiang
// Created 10.16.2022
//Lab 6 : Arrays and Objects


//Define Variables

const myTransport = ["Nissan Sentra", " Car", " Ride from friends", " Metro Bus" + "<br/>"];

const myMainRide = {make:"Toyota", model:"Prius", color:"Space Grey", year:"2020", age: function(){return 2022 - age;}};

//Output our Variables to HTML
document.writeln("Getting around : " + myTransport + " " +"<br/>");

document.writeln("My Main Ride: <pre>",JSON.stringify(myMainRide,null, '\t'), "</pre>");
