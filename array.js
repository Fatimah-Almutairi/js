var friends = [
    "Fatimah",
    "Mona",
    "Bassam",
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

// let p = friends.pop();
// console.log(p)

friends.sort();
console.log(friends);

friends.reverse();
console.log(friends);


// push to add in the end 
// pop delete from end the array
// unshift add item in start for array
// shift delete the first item in array

var shortFri = friends.slice(1,4); // فايدته يقص المصفوفه من اي انديكس الى وين ويخليها اصغر 
console.log(shortFri); 

var otherbro = [
    "Faisl",
    "Abdullah",
    "Ahmed",
    "Youssef",
    "Bassam"
]
// يفيد يدمج اكثر من مصفوفه داخل مصفوفه وحده كبيرة

var allBro = friends.concat(otherbro);  // وممكن اضافه اكثر من مثفوفه بعد الفاصله داخل الاقواس
console.log(allBro)
// friends = friends.toLocaleString();  يحول المصفوفه الى نص 
friends = friends.join(); //  وممكن وضع اللي ابيه بين الكلام وسط القوسين غير الفاصله لكن يكون بين تنصيص

// friends = friends.join(" - ");
console.log(friends);

var myDate = new Date();

console.log(myDate);

var myString = myDate.toLocaleString();

console.log(myString);
