function calc(num1, num2){
    return num1 + num2;
}

let result = calc(20, 10);
console.log(result + 100);

// ======================================

function generate(start, end){
    for (let i = start; i < end; i++){
        console.log(i);
        if(i === 15){
            return 'Interruptting';
        }
    }
}

generate(10, 20);

// ======================================
function SayHello(username, age = "UnKnown") {
    return `Hello ${username}, Your Age Is ${age}`;

}
console.log(SayHello("Fatimah"));
// ======================================

function calcul(...number) {
    let result = 0;
        for (let i = 0; i < number.length; i++) {
            result += number[i];
        }
    return `Final Result Is ${result}`;
}

console.log(calcul(20, 30, 55, 14));
// ======================================

function showInfo (username = "unKnown", age = "unKnown", rate = "unKnown", show = "Yes", ...skills) {
    document.write(`<div><h2> Welcome ${username}</h2>`);
    document.write(`<p> Age: ${age} </p> <p> Hour Rate: $${rate}</p>`);
    if(show === "Yes"){
        if(skills.length > 0){
            document.write(`<p>Skills: ${skills.join(" , ")}</p>`);
        }else{
            document.write(`<p>Skills: No Skills</p>`);
        }
    }else{
        document.write(`<p> Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}

showInfo("Fatimah", 26, 20, "Yes", "HTML", "CSS", "JavaScript"); /// هنا مايمدي اخلي العمر فاضي او الاجر لازم ايف سويته بالتحديات 
// ======================================

document.getElementById("show").onclick = function () {
    console.log("Show");
};

function sayMessage (fname, lname) {
    let message = 'Hello My little boy, ';
    function concatMsg(){
        message = `${message} ${fname} ${lname}`; // هنا حدثت على قيمه الرساله 
        // return `${message} ${fname} ${lname}`;  هنا طريقه ثانيه نفس نتيجه السطر اللي فوقه 
    } // اذا سويت السطر اللي فوق اسوي ريتيرن للفنكشن الثانيه وامسح سطر ٧١ ريتيرن مسج
    concatMsg(); // هنا استدعيت الفنكشن الثانيه 
    return message; // هنا رجعت قيمه الرساله 
}
// هنا فنكشن داخل فنكشن وممكن عمل فنكشن ثالثه تجمع الاسم وسطها والثانيه تجمع الرسالة مع الاسم والاولى تطبع الرساله 
console.log(sayMessage("Bassam", "Mohammed"));
// ====================================== 70

let print = () => {
    return 10;
}
// let print = () => 10;  نفس الفنكشن اللي فوق بس ممكن استخدمه اذا عندي سطر واحد بس داخل الفنكشن
console.log(print()); 
// ====================================== 71
// اول مثال على الماب ٧١
let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];


let addSelf = myNums.map(function (element, index, array ){
    console.log(`Current Element => ${element}`);
    console.log(`Current Index => ${index}`);
    console.log(`Array => ${array}`);
    console.log(`This => ${this}`);
}, 10);
// ممكن اختصار هذا بسر مثل كذا
let adds = myNums.map((e) =>  e + e);
console.log(adds)

// ==============================================  72

let sw = "elZERo"
    .split("")  // هنا يحوله لمصفوفه لانه نص قبل عشان اقدر اسوي ماب عليهم
    .map(function (ele) {
        return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    })
    .join(""); // هنا يرجع العناصر لي نص عشان اجمعهم

    console.log(sw)
// ==============================================
let int = [1, -10, -20, 15, 44, -68]
    .map(function (ele) {
        return -ele; // يكفي السطر ذا عشان اعكس علامتهم لان نفي النفي اثبات يعني سالب مع سالب موجب وبس
    });
    console.log(int);
// ==============================================  
// هنا عشان يرجع الحروف بس بدون ارقام بطريقه الارو فنكشن
let ign = "Fat9im4a2h1"
    .split("")
    .map((e) => isNaN(parseInt(e)) ? e : "")
    .join("")

console.log(ign);
// ==============================================  73
// هنا عن الفلتر تشبهه الماب لكن زي اللي يسوي تيست للعناصر اللي صح يطبعه ويجيبه والخطا لا يعني تستخدم للـ اف كونديشن 
let nam = ["Asma", "Samya", "Amal", "Moued", "Aseel"]
    .filter((e) => e.startsWith("A") ? true : false);
console.log(nam);

let num = [11, 2, 46, 13, 75, 40]
    .filter(function (el) {
        return el % 2 === 0;
    });
console.log(num);

// ==============================================  74

let sentens = "I Love Food Code Too Playing Much"
    .split(" ")
    .filter(function (ele) {
        return ele.length <= 4;
    })
    .join(" ");