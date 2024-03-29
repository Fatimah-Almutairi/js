// window.alert("Hello");
// this.alert("Hello");
// alert("Hello");

// let confirmMS = confirm("Are You Sure?");

// console.log(confirmMS);

// if( confirmMS === true){
//     console.log("Item deleted");
// }else{
//     console.log("Item Not Deleted");
// }

// let promptMs = prompt("Write Your Age?", "25");

// console.log(promptMs);

// ====================================== 104 setTimeOut
function SayMsg(user, age) {
    console.log(`Hello I am ${user} and I have ${age} years old`);
}

setTimeout(SayMsg, 2000, "Fatimah", 26);

// clearTimeout
let counter = setTimeout(SayHi, 2000);

function SayHi() {
    console.log("Hiii");
}

let btn1 = document.querySelector(".clear");

btn1.onclick = () => {
    clearTimeout(counter);  // يوقف الفنكشن اللي تطبع هاي 
}

// ====================================== 105 setInterval 
// فايدته الوقت اللي يتنظر بين الكول بين الفنكشن والفنكشن الثانيه يعني كم ينتظر بعد تنفيذ الاولى لحد يبدا بالثانيه 

// setInterval( () => {
//     console.log("Hello");
// }, 1000);

let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0"){
        clearInterval(coun);
    }
}

let coun = setInterval(countdown, 1000);
// ====================================== 106

console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.hash);
// location.href = "/sec02"; يغير الرابط للموقع ويحدد ع طول السيشن تو اللي هو ديف داخل الصفحه

// location.reload(); // فايدته يسوي ريفريش للصفحه ممكن احطه داخل زرار او بعد كليك الحفظ او ممكن بعد وقت معين من الفنكشن

// location.replace()   فايدته يحذف الصفحه هذي الحاليه من تاريخ التصفح داخل الاقواس احط الرابط 
// location.assign()  Navigates to the given URL داخل الاقواس احط رابط الموقع مافهمته زين 
// كانه معناها انه تعطي رابط جديد للموقع مع محافظتها ع تاريخ التصفح 

// ====================================== 107 open and close window

// close ماتقفل الا الحاجه اللي انفتحت عن طريق الاوبن فقط يعني اللي انفتح عن طريق الجافا سكريبت 

// setTimeout(function () {
//     // window.open( url, name or is _blank or _self, features, history = replace)
//     window.open("https://google.com", "_blank", "width=600,height=600,left=350,top=250");
// },3000);
// window.close();

// ====================================== 108
// السجل وغالباً يستخدم داخل الانسبكت في قوقل مو هنا 
history.length; // يرجع عدد الصفحات اللي بالسجل مع الصفحه الحالية
history.back (); // يرجعني للصفحه السابقه
history.forward(); // يوديني للصفحه التالية
history.go(2); // لازم رقم داخل الاقواس الموجب يعني صفحه كم قدام صفر زي التحديث للصفحه الحاليه السالب الصفحات السابقة

// ====================================== 109

// window.stop()  يوقف تحميل او يوقف اي شيء 
// window.print()
let newWindow = window.open("https://google.com", "", "width=400,height=400");
newWindow.focus(); //  يركز عليها يخليها قدام
newWindow.close(); // قفلتها عشان ماتزعجني 
// window.scrollTo(x,y)  مدعوم من كل المتصفحات فايدته يوديني للمكان هذا من قيمه الاكس افقي والواي عمودي
// window.scrollBy(200,300);  فايدته يودي لين هنا واذا تكرر يصير يزود ع المكان قيمه الاكس والواي يعني يدبل كل مره
// scroll() غير  مدعوم من سفاري 
window.scrollTo({
    left: 500,
    top: 300,
    behavior: "smooth" // طريقته يكون ناعم المؤشر
})
// كله يكتب في الانسبكت مو هنا السكرووول
// ====================================== 110

let btn = document.querySelector(".up");
window.onscroll = () => {
    if (window.scrollY >= 500) {
        // console.log(`Scrolling Y value is ${window.scrollY}`);
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};

btn.onclick = () => {
    window.scrollTo ({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};

// ====================================== 111

// Set
window.localStorage.setItem("color", "#cdcdcd");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "24px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove
// window.localStorage.removeItem("color");

// Clear
// window.localStorage.clear();

// Key
console.log(window.localStorage.key(0));
// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");



console.log(window.localStorage);
console.log(typeof window.localStorage);

// ====================================== 112

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");
window.localStorage.clear();

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});