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
}

let coun = setInterval(countdown, 1000);