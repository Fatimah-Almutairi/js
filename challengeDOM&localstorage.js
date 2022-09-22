//  Header With Title And Menu
let myheader = document.createElement("header");
let mytitle = document.createElement("h1");
let mylogo = document.createTextNode("FATIMAH");
let list = document.createElement("div");
let lisText = document.createTextNode("Home  About  Services  Contact");
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let menu1 = document.createTextNode("Home");
// let menu2 = document.createTextNode("About");
// let menu3 = document.createTextNode("Services");
// let menu4 = document.createTextNode("Content");


myheader.className= "head";
// ul.className = "menu";


mytitle.appendChild(mylogo);
list.appendChild(lisText);
myheader.appendChild(mytitle);
myheader.appendChild(list);

// li1.appendChild(menu1);
// li2.appendChild(menu2);
// li3.appendChild(menu3);
// li4.appendChild(menu4);

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// myheader.appendChild(ul);

myheader.style.cssText = "display: flex; justify-content: space-between; margin: 20px;";
document.body.appendChild(myheader);

mytitle.style.cssText = "color: blue; margin-left:0px;";
list.style.cssText = "color:gray; font-size:20px; padding: 10px;";

// ul.style.cssText = "display: flex; color: gray; list-style-type: none;";

// li1.style.cssText = "padding-right: 10px; font-size: 20px";
// li2.style.cssText = "padding-right: 10px; font-size: 20px";
// li3.style.cssText = "padding-right: 10px; font-size: 20px";
// li4.style.cssText = "padding-right: 10px; font-size: 20px";

// Add Div Content And Products

let content = document.createElement("div");
// let product = document.createElement("div");
// let span = document.createElement("span");
// let myText = document.createTextNode("Product");
// let No = document.createTextNode("1");

// No.forEach((elememnt) => {
//     elememnt.
// });

for(let i = 0; i<15; i++){
    let product = document.createElement("div");
    product.classList.add("product");
    product.style.cssText = "";
    let span = document.createElement("span");
    span.style.cssText = "" ;
    span.textContent = i + 1;
    product.appendChild(span);
    product.append("Product");
    content.appendChild(product)
}


// span.appendChild(myText);
// product.appendChild(span);
// content.appendChild(product);

document.body.appendChild(content);