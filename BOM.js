window.alert("Hello");
this.alert("Hello");
alert("Hello");

let confirmMS = confirm("Are You Sure?");

console.log(confirmMS);

if( confirmMS === true){
    console.log("Item deleted");
}else{
    console.log("Item Not Deleted");
}

let promptMs = prompt("Write Your Age?", "25");

console.log(promptMs)