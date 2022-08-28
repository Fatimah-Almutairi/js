let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


console.log(Math.floor(Math.min(a, b, c, d)));

console.log(a ** Math.trunc(d));

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number.parseInt(d));
console.log(Math.round(d));

console.log(Math.ceil(b)/ Math.ceil(d));
console.log(Math.ceil(--b)/Math.ceil(d));

// --------------------------------------

let ab = "Elzero web school";

console.log(ab.charAt(2).toUpperCase() + ab.slice(3, 6));

console.log(ab.substring(13, 14).repeat(8).toUpperCase());

console.log(ab.substring(0, 7).split())

console.log(ab.substr(0,6), ab.substr(-6));

console.log(ab.charAt(0).toLowerCase() + ab.slice(1, length-1).toUpperCase() + ab.slice(-1).toLowerCase());

// ==========================================

let st = "Elzero Web School" ;

if ((st.length*2).toString() === "34") {

  console.log("Good");
}

// W Position May Change

if (st[st.indexOf("W")].toLowerCase() === "w") {

  console.log("Good");
}

if (st.length !== "string") {

  console.log("Good");
}

if (typeof (st.length) === "number") {

  console.log("Good");
}

if (st.slice(0,7) + st.slice(0,7) === "Elzero Elzero") {

  console.log("Good");
}

// ============================ switch


// ============================ Array

let zero = 0;
let counter = 3;

let my = [ "Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer" ];

// console.log(my.slice[][])


console.log(my.slice(zero, ++counter).reverse());

//2
 console.log(my.slice(my.shift(), --counter).sort());


//3
console.log(my.splice(zero,(counter+counter),"Elzero"));


console.log(my.splice(zero, ++zero, "rO"));

// ================================================ LOOP

// let myAdmins = ["Ahmad", "Osama", "Sayed", "Stop", "Samera"];
// let myEmploees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// document.write(`<div> We Have x Admins </div>`);

// for(let i = 0; i <myAdmins.length; i++){
//     // console.log(myAdmins[i]);
//     let result ;
//     if( i === 'Stop'){
//         // break;
//         // result += myAdmins.length;
//         // return `<div> We Have ${result} Admins </div>`;
//     }else{
//         // console.log(myAdmins[i])
//     }
//     document.write(`<div> We Have ${myAdmins.length} Admins </div>`);

// }
// document.write('<hr>');

// ================================== Functions
