let myElements = document.querySelector(".js");


// innerHTML فايدته يكتب في الاتش تي ام ال حتى لو تاق يكتبه ويسوي تاق له 
console.log(myElements.innerHTML);
// فايدته يكتب انه نص يتجاهل التاق ولا يكتبه يعامله على انه نص بس txtcontent
console.log(myElements.textContent);

// =========================================== 87

console.log(document.getElementsByTagName("p")[0].attributes); // يجيب كل الاتريبيوت اللي موجوده في التاق

let myp = document.getElementsByTagName("p")[0];
if(myp.hasAttribute("data-src")) {
    if(myp.getAttribute("data-src") === "") {
        myp.removeAttribute("data-src");
    } else{
        myp.setAttribute("data-src", "New Value in data-src");
    }
}else {
    console.log(`Not Found`);
}
