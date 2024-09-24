"use strict";

// console.log(name);
// var name = "Neha";

let name; // Decalration  of variable
name = "NEHA"; // Initialization
// console.log(name); // undefined

// Null :

// Null is a primitive data type in JavaScript. It is used to represent the intentional absence of any
// object value. It is not the same as undefined. Null is a value that is assigned to
// a variable when it has been declared but has not been assigned any value.

let name1 = null;
name1 = "Pablo";
// console.log(name1); // null

// Undefined :

// Undefined is a primitive data type in JavaScript. It is used to represent the absence of any object
// value. It is not the same as null. Undefined is a value that is assigned to a
// variable when it has not been declared or has been declared but has not been assigned any value.
// It is also assigned to a variable when it is declared but has not been initialized.

let name2; // not defined !== undefined
// console.log(name2); // undefined

// console.log(name3); // ReferenceError:  not defined

// Number :

// Number is a primitive data type in JavaScript. It is used to represent a numeric value.
// It can be a whole number or a decimal number.

let num = 100;
// console.log(num); // 100

let Num = 9;
// console.log(Num); // 9

// Num !== num (case sensitive)

let decimal_no = 0.0001;
// console.log(decimal_no); // 0.0001

// How to check data types ?
console.log(typeof decimal_no); // number

// Task-1:
// Do mathematical operations to perform addition, subtraction, multiplication and divison using "number" data types in js.

// Addition :

//let num1 = 100;
//let num2 = 200;
// console.log(num1 + num2); // 300
let addition_result = num1 + num2;
console.log(addition_result); // 300
// todo: Do the above task and upload it in github then share me the link in the group.

//ADDITION:-

let num1=100;
let num2=100;
let sum=num1+num2;
console.log(sum); 
//out put (200)

//SUBSTRACTION:-
let a=100;
let b=50;
let sub=a-b; 
console.log(sub); 
//out put (50)

//MULTIPLICATION:-

let A=10;
let B=50;
let MUL=A*B;
console.log(MUL); 
//out put (50)


//DIVISION:-

l//et num3=20;
let num4=5;
let div=num3/num4;
console.log(div); 
//out put (4)

// BigInt :
// BigInt is a primitive data type in JavaScript. It is used to represent a whole number that is
// larger than the maximum limit of the Number data type. It is used to represent large integers.

let bigInt = 10000000000000000000000000000000000000000000000000000000000000000000000000;
// console.log(bigInt); // 1e+73

// Symbol :
// Symbol is a primitive data type in JavaScript. It is used to create a unique identifier for an
// object's property. It is used to prevent property name collisions.

let symbol1 = Symbol("abc");
let symbol2 = Symbol("abc");
// console.log(symbol1); // Symbol(abc)
// console.log(symbol2); // Symbol(abc)
// console.log(symbol1.description); // abc
// console.log(symbol2.description); // abc
// console.log(symbol1 === symbol2); // false

// NaN : Not a Number
// NaN is a primitive data type in JavaScript. It is used to represent a value that is not
// a number. It is used to represent the result of a mathematical operation that cannot be
// performed.

let num3 = 10 / 0;
// console.log(num3); // NaN / Infinity

// Boolean :
// Boolean is a primitive data type in JavaScript. It is used to represent a logical value that
// can be either true or false.

let boolean1 = true;
let boolean2 = false;
// console.log(boolean1);
// console.log(boolean2);

let boolean3 = " ";
// boolean3 ? console.log("true") : console.log("false");

// String :
// String is a primitive data type in JavaScript. It is used to represent a sequence of characters.
// collections of characters.
// It is used to repres,ent text data.

// How to define
// 1. Using single quotes
let str1 = "Hello, World!";
// console.log(str1);

// 2. Using double quotes
let str2 = "Hello, World!";
// console.log(str2);

// 3. Using backticks (template literals)
let str3 = `Hello, World!`;
// console.log(str3);

// 4. Using new String()
let str4 = new String("Hello, World!");
// console.log(str4);

// My Details :
// Name : Pramod
// Age : 25
// Address : Bangalore
// Contact : 1234567890

//let name = "Neha";
let age = "23";
let address = "Bangalore";
let contact = "1234567890";

console.log(name);
console.log(age);
console.log(address);
console.log(contact);

console.log("My details :", name, age, address, contact); // My details : Pramod 25 Bangalore 1234567890
console.log("My details:" + name + age + address + contact); // My details:Pramod25Bangalore1234567890
console.log(
  `My name is ${name}, my age is ${age}, my address is ${address} and my contact no is ${contact}`
);

// My name is Neha, my age is 25, my address is Bangalore and my contact no is 1234567890

// Fun fact :
let score1 = "100";
let score2 = 200;

let number = "Neha";
console.log(typeof number); // string

let string = 5.23;
console.log(typeof string); // number

let name_string = "Pablo";
// length: 5
// Start-index: 0
// Last-Index = 5 - 1 = 4
console.log(name_string.length);// 5
console.log(`Last index: ${name_string.length - 1}`); // Last index: 4
console.log(name_string[2]); // b
console.log(name_string[4]); // o
console.log(name_string[name_string.length - 1]); // o
console.log(name_string.toUpperCase()); // PABLO
console.log(name_string.__proto__); // {}
console.log(name_string.__proto__.__proto__); // {}
console.log(name_string.charAt(2)); // b
console.log(name_string.indexOf("o")); // 4

const url = "pramodjena.github.io";
console.log(url.replace(".", "-")); // pramodjena-github.io
const email = "pramod@gmail@yahoo@ios.com";
console.log(email.replace("@", ".")); // pramod.gmail@yahoo@ios.com

const mail = "pramodjena.com";
console.log(mail.includes(".com")); // true
console.log(mail.includes("@yahoo")); // false

const company_name = new String("WeCode");
console.log(company_name); // [String: 'WeCode']

let converted_score = Number(score);
console.log(typeof converted_score);
 