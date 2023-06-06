
// let name = 'Lera';
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName = 'Lera';
// let lastName = 'Hashemi';
// let firstName = 'Lera', lastName = 'Hashemi';

//let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);
// const is better to use if we have 1 variable, 
// if we have 2 variables - let is our choice

// PRIMITIVE TYPES/VALUE Types
// let name = 'Mosh'; //String literal
// let age = 30; // number literal
// let isApproved = true; // boolean literal
// let firstName = undefined;
// let lastName = null; // clears the value of variable

// DYNAMIC TYPING
// typeof name
//"string"
//name = 1;
// 1 
//typeof name
//"number"
//typeof age
//"number"
//age = 30.1
// 30.1
//typeof age
//"number"
// in javascript we just have number variable 
// in python we have different kinds of numbers
// primitives value types: strings, number, boolean, undefined, null

// REFERENCE TYPES: objects, arrays and functions
// OBJECTS
// {} object literal
// let name = "Lera";
// let age = 30;
// let person = {
//  name: "Lera",
//  age: 23
//};
// name and age are the keys of object!
// console.log(person);
// output: {name: "Lera", age: 23}
// age: 23
// name: "Lera"

// DOT NOTATION 
// person.name = "Valeriia"
// person.age = 24
// console.log(person.name);
// BRACKET NOTATION 
// let selection = 'name';
// person[selection] = 'Val'
// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'; output will have 3 elements, its dynamic objects
// console.log(selectedColors);
// console.log(selectedColors[0]); output is red


// FUNCTIONS
// function greet(name, lastName) {
//    console.log('Hello' + name + ' ' + lastName);
//}
//
//greet('Lera', 'Hashemi');
//
//
// TYPES OF FUNCTIONS
// performing a task
// function greet(name, lastName) {
//    console.log('Hello' + name + ' ' + lastName);
//}
//
// calculating a value
// function square(number) {
//    return number * number;
//}
//
//let number = square(2);
//console.log(number);