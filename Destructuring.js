// ============================================ 116
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohammed", "Gamal"]]];

// let [a, b] = myFriends; // هذي السطور طريقتي
// a = myFriends[3][0];
// b = myFriends[3][2][1];
let [, , ,[a, ,[, b]]] = myFriends;  // هو سوو الطريقه هذي
console.log(a);
console.log(b);

// ============================================ 117
// Destructuring Array => Swapping Variables

let Book = "Video";
let Video = "Book";

[Book, Video] = [Video, Book];

console.log(Book);
console.log(Video);

// ============================================ 118