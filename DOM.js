let myElements = document.querySelector(".js");


// innerHTML فايدته يكتب في الاتش تي ام ال حتى لو تاق يكتبه ويسوي تاق له 
console.log(myElements.innerHTML);
// فايدته يكتب انه نص يتجاهل التاق ولا يكتبه يعامله على انه نص بس txtcontent
console.log(myElements.textContent);

// =========================================== 88

console.log(document.getElementsByTagName("p")[0].attributes); // يجيب كل الاتريبيوت اللي موجوده في التاق

let myp = document.getElementsByTagName("p")[0]; // هنا ربطت الحفظ في متغير عندي هنا 
if(myp.hasAttribute("data-src")) { // قلت له اذا لقيت الاتريبيوت هذا سواا
    if(myp.getAttribute("data-src") === "") {
        myp.removeAttribute("data-src"); // اذا لقاه تروو فاضي القيمه احذفه 
    } else{
        myp.setAttribute("data-src", "New Value in data-src");  // اذا لقيت فيه قيمه بدلها بالقيمه الجديده 
    }
}else {
    console.log(`Not Found`);  // اذا مالقيته حط نوت فاوند انه مالقيته
}


if(myp.hasAttributes()) {
    console.log(`p Has Attribute`);  // اقوله اذا لقيت الاتريبيوت في العنصر هذا اطبع كذا 
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log(`Has Attribute`);  // اقوله اذا لقيت الاتريبيوت في العنصر هذا اطبع كذا 
}else{
    console.log(`Div has not attribute`);
}

// ======================================= 89
  // كل اللي انشئه هنا يصير علىصفحة الاتش تي ام ال
let myElement = document.createElement("div");  // هنا انشأت عنصر ديف في الصفحه
let myAtt = document.createAttribute("data-custom"); // هنا انشأت اتريبيوت وحطيتها بمتغير لكن للحين الاتريبيوت فاضي 
let myText = document.createTextNode("Product One"); // هنا انشأت نص وحطيته بمتغير 
let myComment = document.createComment("This is Div"); // انشأت كومنت تعليق وحطيته بمتغير

myElement.className = "product"; // حطيت كلاس داخل المتغير 
myElement.setAttributeNode(myAtt);  // هنا ربطت الاتريبيوت داخل العنصر بس بدون قيمه 
myElement.setAttribute("data-test", "Testing");  // هنا انشأت اتريبيوت وحطيت قيمه  له

// Append text to element
myElement.appendChild(myText);

// Append comment to element
myElement.appendChild(myComment);

// Append element to body
document.body.appendChild(myElement);

// ===================================== 90

let myDiv = document.createElement("div");
let myH = document.createElement("h3");
let myP = document.createElement("p"); 
let myTe = document.createTextNode("Text inside h3");
let myTex = document.createTextNode("This is Text inside paraghraph");

myDiv.className = "Pro";
myH.appendChild(myTe);
myP.appendChild(myTex);

document.body.appendChild(myDiv);
myDiv.appendChild(myH);
myDiv.appendChild(myP);

// ===================================== 91

let myEl = document.querySelector("div")
console.log(myEl);
console.log(myEl.children);
console.log(myEl.children[0]);
console.log(myEl.childNodes);
console.log(myEl.childNodes[0]);
