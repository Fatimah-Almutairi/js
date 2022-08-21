var x = Math.ceil(4.2);   // فايدته يقرب للرقم الاكبر السقف

var y = Math.floor(4.7); // يقرب للرقم الاصغر الارضيه 

console.log(x , y);

var z = Math.round(7.49);  // يقرب للاقرب بحيادية اذا نفس كذا للاصغر و اول مايجي بوينت خمسه يروح للرقم الاكبر

console.log(z);

var Mix = Math.max(22, 9, 30, 1, 74, 93, 10);

console.log(Mix);
console.log(Math.round(Mix));
console.log(Math.floor(Math.round(Mix + 10.5))); // ممكن الاستفادة باكثر من ميثود في امر واحد 

//  اختيار رقم عشوائي من الرينج اللي احدده له
// فايدته يطلع رقم عشوائي لي من المعادله اللي عطيته وحطيت فلور لان مابيه يتعدى الميتين عشان لو استعملت السقف بيطلع اكبر
var xx = Math.random();

console.log(Math.floor( (xx * 200) + 1 ) );

