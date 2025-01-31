// Nums and Mathematics :

// const decimal = 12.012054;
// console.log(decimal.toPrecision(5)); // 12.012
// console.log(decimal.toLocaleString("en-IN")); // 12.012

// ----------------------- Math -----------------------
// Math :
// console.log(Math);`
// Math.PI : 3.141592653589793
// console.log(Math.PI);
// Math.abs() : absolute value
// console.log(Math.abs(-12.5)); // 12.5
// Math.ceil() : round up to the nearest integer
// console.log(Math.ceil(12.5)); // 13
// Math.floor() : round down to the nearest integer
// console.log(Math.floor(12.5)); // 12
// Math.max() : returns the maximum value
// console.log(Math.max(12, 15, 18, 45)); // 45
// Math.min() : returns the minimum value
// console.log(Math.min(12, 15, 18, 45)); // 12
// Math.pow() : returns the value of a number raised to a power
// console.log(Math.pow(4, 2)); // 16
// Math.round() : returns the value of a number rounded to its nearest integer
// console.log(Math.round(12.5)); // 13
// Math.sqrt() : returns the square root of a number
// console.log(Math.sqrt(25)); // 5

// Task-1 :
// Write a program to generate random number between 0 to 1
// Math.random() -By Default, It generates random number btween 0 to 1(Ex: 0.000005,0.65464654641,0.0000001,etc)
// const random = Math.random();
// console.log(random);

// Task-2 :
// Write a program to generate random number between 1 to 6

const start = 1;
const end = 6;
const random = Math.floor(Math.random() * (end - start + 1)) + start;
// console.log(random);
// let randomnumber=Math.random();
// console.log(randomnumber);
