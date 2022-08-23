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

console.log(ab.split())