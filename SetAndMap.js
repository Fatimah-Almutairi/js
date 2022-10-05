// =====================================  123

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");
console.log(myUniqueData.has("A")); // مفروض يرجع ترو يعني موجود العنصر هذا 

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2); // هنا بيحذف العنصر اللي بين القوسين
console.log(myUniqueData.delete(2));  // هنا داخل المونسول لوق يرجع ترو اذا لقى العنصر وحذفه او خطا اذا مالقاه
console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

// =====================================  124

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

// =====================================  125

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);  // هنا يرجع اوبجكت فاضي بدون الكيي 
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String", // يرجع السطر هذا بس لانه كتب على اللي فوق واعتبر العشره هذي رقم مو نص
};

console.log(myNewObject[10]);

let myNewMap = new Map();  // ممكن نضيف العناصر داخل القوسين هذولي او بااستخدام السيت نفس المكتوب 
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

// =====================================  126

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let MyMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
  ]);
  
  // MyMap.set(10, "Number");
  // MyMap.set("Name", "String");
  
  console.log(MyMap);
  
  console.log(MyMap.get(10));
  console.log(MyMap.get("Name"));
  console.log(MyMap.get(false));
  
  console.log("####");
  
  console.log(MyMap.has("Name"));
  
  console.log("####");
  
  console.log(MyMap.size);
  
  console.log(MyMap.delete("Name"));
  
  console.log(MyMap.size);
  
  MyMap.clear();
  
  console.log(MyMap.size);

// =====================================  127

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap1 = new Map();

myMap1.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap1);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

// =====================================  128

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n; //حطيت قدام الرقم موجب عشان يقدم يجمعه ويعامله كرقم لانه داخل تنصيص كنص  unary operation طريقة الموجب تسمى 
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4]; // هنا مصفوفه عاديه 

let mySet1 = new Set(myArray); // هنا حطيتها داخل متغير وحولتها لسيت يعني بس عناصر مميزه بدون تكرار

console.log(Array.from (mySet1)); // هنا استعملت عليها الاري فروم 
// السطر اللي تحت يعطي نفس نتيجه اللي فوقه
// console.log([...new Set(myArray)]); // Future بيتلكم عنه قدام بالدروس الجايه 

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

// =====================================  129

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let MyArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// MyArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

MyArray.copyWithin(1, -2, -1);  // [10, 'A', 30, 40, 50, 'A', 'B']
console.log(MyArray);

// =====================================  130

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;  // هنا الذيس هو اللي ماي نمبر يعني عشره
}, myNumber); 

// let check = nums.some((e) => e > 5); // هنا نفس الفنكشن الاولى بداية الدرس بس بطريقه الاروو فنكشن

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};
// هنا الفنكشن بيطلع الرينج حق المصفوفه بين الارقام اللي محدده بالاوبجكت ويرجع صح او خطا اول مايحصل نتيجه 
let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

// =====================================  131

const locations = {
    20:
    10:
    30:
}

