function calcu(){
    "use strict";

    var amount = document.getElementById("price").value;

    var result = amount * 3.75;

        // ممكن كتابتها بالطريقة هذي 
    // let message = amount + " Doller is worth " + result + " Riyal ";

    // document.getElementById('message').innerHTML = message;


    var message = document.getElementById("message");

    if(amount === ""){
        message.innerHTML = "Can't Be Empty";
    }
    else if(amount === "0"){
        message.innerHTML = "The value must be not 0";
    }else if(isNaN(amount)){
        message.innerHTML = "The value must be number only";
    }else if(amount < 0){
        message.innerHTML = "Can't be the value negative number";
    }
    
    else{
        message.innerHTML = amount + " Doller is worth " + result + " Riyal ";
    }

}

var friends = [
    "Fatimah",
    "Mona",
    "BAssam",
    "Ayshah"
];

if(Array.isArray(friends)){
    console.log("this is array");
}else{
    console.log("This is Not Array ");
}


friends.splice(1, 0, "Yasser");

console.log(friends);
console.log(friends.length);

let p = friends.pop();
console.log(p)

// push to add in the end 
// pop delete from end the array
// unshift add item in start for array
// shift delete the first item in array


// friends = friends.toLocaleString();  يحول المصفوفه الى نص 
friends = friends.join(); //  وممكن وضع اللي ابيه بين الكلام وسط القوسين غير الفاصله لكن يكون بين تنصيص

// friends = friends.join(" - ");
console.log(friends);

var myDate = new Date();

console.log(myDate);

var myString = myDate.toLocaleString();

console.log(myString);
