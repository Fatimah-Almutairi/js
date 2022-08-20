var myString = "I Don\'t Get My Dream Job Unit";

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