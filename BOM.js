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

setTimeout(function () {
    // window.open( url, name or is _blank or _self, features, history = replace)
    window.open("https://google.com", "_blank", "width=600,height=600,left=350,top=250");
},3000)
// window.close();
