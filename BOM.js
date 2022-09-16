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