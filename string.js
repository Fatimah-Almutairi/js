var myString = "I Don\'t Get My Dream Job Unit";

var mynumber = 30;
console.log(mynumber);
console.log(typeof(mynumber));
var mynew =  mynumber.toString();
console.log(mynew);
console.log(typeof(mynew));

var myWord = myString.indexOf("My")  // اداة بحث عن الكلمه بين القوسين وممكن تحديد من اي رقم انديكس يبدا البحث
console.log(myWord);
// ممكن استعمال search نفس الانديكس اوف 


var mySplittedString = myString.split(" ");
// يحول من سترينق الى اوبجكت

console.log(myString);
console.log(typeof(myString));

console.log(mySplittedString);
console.log(typeof(mySplittedString));

var mySlicedString = myString.slice(1); // بين القوسين اعلمه من وين يبدا يقص النص وممكن تحديد النهاية وممكن لا
// اطلع شريحه من النص لمتغير جديد ممكن استفيد من الجزء اللي اخذته من النص باي طريقه

console.log(mySlicedString);
console.log(typeof(mySlicedString))