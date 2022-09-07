// let user = {}

let user = new Object ({
    age: 20,
})
console.log(user);

user.age = 30;
user["country"] = "Saudi";

user.sayHello = function () {
    return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello() );
