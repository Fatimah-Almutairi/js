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

let user1 = {
    theName: "Fatimah",
    theAge: 26,
    theTitle: "Developer",
    theCountry: "KSA",
    theColor: "Black",
    skills: {
        html: 70,
        css: 50,
    },
};

const {
    theName: n, // زيي اللي غيرت اسم المتغير بعد النسخ 
    theAge: A, 
    theColor: co = "Red", // قيمه افتراضيه احمر اذا كان فاضي من فوق 
    skills: {
        html: h,css
    },
} = user1;
console.log(n);
console.log(A);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const {html: skillOne, css: skillTwo} = user1.skills;
console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

// ============================================ 120
showDetails(user1);

function show(obj){
    console.log(`Your Name Is ${obj.theName} from first function`);
    console.log(`Your CSS Skills Progress Is ${obj.skill.css}`);

}
function showDetails ({theName, theAge, skills: {css}} = user1){
    console.log(`Your Name Is ${theName} from second function`);
    console.log(`Your Age Is ${theAge}`);
    console.log(`Your CSS Skills Progress Is ${css}`);
}


// ============================================ 121

const user2 = {
    theName: "Fatimah",
    theAge: 26,
    skills: ["html", "css", "JavaScript"],
    addresses : {
        KSA: "Riyadh",
        anyware: "Null",
    },
};

const {
    theName: nm,  // فايدته انه ابي اغير اسم المتغير واناديه بالاختصار هذا 
    theAge: ag,
    skills: [one, two, three],
    addresses: {KSA : sa},
} = user2;

console.log(`Your Name Is ${nm}`);
console.log(`Your Age Is ${ag}`);
console.log(`Your Skills Is ${one}, ,${three}`);
console.log(`Your live In ${sa}`);

// ============================================ 122 Challenge

let chosen = 2;

let myFriend = [
    {title: "Fatimah", age: 26, available: true, skillss: ['HTML', 'CSS']},
    {title: "Bassam", age: 9, available: false, skillss: ['angray', 'cray']},
    {title: "Youssef", age: 16, available: true, skillss: ['Player', 'nothing']}
];

if(chosen === 1) {
   [{title, age, available , skillss}]= myFriend;
}if (chosen === 2) {
   [, {title, age, available, skillss},]= myFriend;
} else {
    [, ,{title, age, available, skillss}]= myFriend;
}

console.log(title);
console.log(age);
console.log(available);
console.log(skillss);