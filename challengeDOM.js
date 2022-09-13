let myheader = document.createElement("header");
myheader.className= "head";
let mytitle = document.createElement("h1");
let mylogo = document.createTextNode("FATIMAH");
let menu = document.createElement("")

mytitle.style.cssText = "color: blue; margin-left:0px; font-size:20px; display: flex";

mytitle.appendChild(mylogo);
myheader.appendChild(mytitle);
document.body.appendChild(myheader);