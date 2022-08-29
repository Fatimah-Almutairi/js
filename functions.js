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
        message = `${message} ${fname} ${lname}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Bassam", "Mohammed"));