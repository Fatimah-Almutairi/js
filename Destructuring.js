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
// Destructuring Objact
const user = {
    theName: "Fatimah",
    theAge: 26,
    theTitle: "Developer",
    theCountry: "KSA",
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);
// 

let theName = user.theName;
let theAge = user.theAge;
let theTitle = user.theTitle;
let theCountry = user.theCountry;
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
// 

({theName, theAge, theTitle, theCountry} = user); // لانه اوبجيكت لازم اقواس دائريه وقت استبدال القيم للجمله كامله
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
// 

// ============================================ 119