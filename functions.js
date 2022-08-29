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

