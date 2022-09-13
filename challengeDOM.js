//  Header With Title And Menu
let myheader = document.createElement("header");
let mytitle = document.createElement("h1");
let mylogo = document.createTextNode("FATIMAH");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let menu1 = document.createTextNode("Home");
let menu2 = document.createTextNode("About");
let menu3 = document.createTextNode("Services");
let menu4 = document.createTextNode("Content");


myheader.className= "head";
ul.className = "menu";


mytitle.appendChild(mylogo);
myheader.appendChild(mytitle);

li1.appendChild(menu1);
li2.appendChild(menu2);
li3.appendChild(menu3);
li4.appendChild(menu4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
myheader.appendChild(ul);

document.body.appendChild(myheader);
// document.body.appendChild(ul)


mytitle.style.cssText = "color: blue; margin-left:0px; font-size:20px";

ul.style.cssText = "display: flex; color: gray; margin: 10px";
myheader.style.cssText = "display: flex; justify-content: space-between;";
