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
console.log(myEl.children); // يرجع بس العناصر اللي داخل 
console.log(myEl.children[0]);
console.log(myEl.childNodes); // يعطي العناصر مع المسافه والتعليق وكل شيء
console.log(myEl.childNodes[0]); 
console.log(myEl.firstChild); // يجيب نفس النتيجة سطر ٧٨
console.log(myEl.lastChild);
console.log(myEl.firstElementChild); // يجيب اول عنصر في السطر ٧٦
console.log(myEl.lastElementChild);


// ===================================== 92  Events
// onclick
// oncontextmenu  == right click  === نفسها الكليك يمين 
// onmouseenter
// onmouseleave
// onscroll
// onresize
// onfocus
// onblur
// onsubmit
// onload

let myBtn = document.getElementById("btn");

myBtn.onclick = () => {
    console.log("Clicked");
}

window.onscroll = () => {  // وعشان اشغله لازم اروح للستايل واعدل ارتفاع الصفحه
    console.log("scroll");
}

window.onresize = () => {
    console.log("Resized");
}

// ===================================== 93

let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");

document.forms[0].onsubmit = (e) => {
    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length >= 6){
        userValid = true;
    }
    if (ageInput.value !== ""){
        ageValid = true;
    }
    if (userValid === false || ageValid === false){
        e.preventDefault();
    }
}


document.links[0].onmouseenter = (event) => {
    console.log(event);  // ممكن اطلع منه نوع الايفينت اللي هو ماوس انتر

}

// ===================================== 94

let one = document.querySelector(".one");  // انبوت عاديات بالصفحه
let two = document.querySelector(".two");

window.onload = function () { // فكرته انه اول مايحمل الصفحه يسوي فوكس على الانبوت هذا 
    two.focus();
}

one.onblur = function () {
    document.links[0].click();  // فايدته اول مااطلع من الانبوت هذا يفتح اللينك اللي حددته
};

// ===================================== 95

let element = document.getElementById("my-div");

console.log(typeof element.classList); //نوع الكلاس
console.log(element.classList.length); // عدد العناصر داخله
console.log(element.classList.contains("one")); //زي اللي يسوي تشييك على الكلاس اذا موجود هذا العنصر اول لا ويرجع  صح وخطا
console.log(element.classList.contains("Fatimah"));
console.log(element.classList.item("2")); // اعطيه رقم الانديكس ويرجع العنصر داخل الكلاس ايش هو 


element.onclick = () => { // method of add is start change and added the class when I click in elements 
    // طبعاً ماراح يضيف الا اذا سويت كليك ع العنصر يبدا يضيف
    this.classList.add("add-one", "add-two");  // ياخذ مجموعه توكن tokens اللي هو مجموعه الكلاسات داخله 
};

element.onclick = function () {
    // هنا يحذف لما اضغط على العنصر الكلاس هذا
    element.classList.remove("two");
}

element.onclick = () => {
    // هنا على حسب اذا موجود الكلاس هذا احذفه واذا مو موجود اضيفه طبعاً بعد الكليك
    element.classList.toggle("Fatimah");
}

// ===================================== 96 style in DOM

element.style.color = "red";
element.style.fontWeight = "boold";

element.style.cssText = "font-weight: bold; color: yellow; opacity: 0.9;";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

console.log(document.styleSheets[0].rules[0].style.removeProperty("line-height"));
console.log(document.styleSheets[0].rules[0].style.setProperty("color", "green"));