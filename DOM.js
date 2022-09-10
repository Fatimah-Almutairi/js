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

let myElement = document.createElement("div");
let myAtt = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div");

