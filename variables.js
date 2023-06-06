/*
const yourFirstVariable = "Learning to code gives you superpowers";
const yourSecondVariable = 10;
const yourThirdVariable = { firstProperty: "hello world" };
console.log(yourFirstVariable);
    OUTPUT: Learning to code gives you superpowers

const newVariable = "Hello world";
let anotherVariable;
anotherVariable = 20;
console.log(anotherVariable);
    OUTPUT: 20

const variable1 = 10;
let variable2 = 10;
var variable3 = 10;
    HOW TO DECIDE BETWEEN const, let, var?
random variable4 = 10;
    OUTPUT gives error because random is not assigned keyword
var myVariable = 10;
var myVariable = 20;
myVariable
    OUTPUT 20, we use 'var' when we re-declare variable

const anotherVariable = 10;
const anotherVariable = 20;
    OUTPUT yells at us because const is constant variable, we cannot change it

we use 'let' when in future the variable will reassign

let counter = 0;
counter = counter + 1;
or we can write "counter++"" also means counter + 1
counter
    OUTPUT 2

const taxRate = 0.08;
    taxrates never change

let - when we except value to change or reassign


    HOW TO NAME VARIABLES 
const yourFirstVariable = 10;
const your_first_variable = 10;
const YOUR_FIRST_VARIABLE = 10;
const yourfirstvariable = 10;
const YourFirstVariable = 10;


const firstVariable = "JavaScript gives you superpowers";
const oneVariable = 20; const secondVariable = 30;
    OUTPUT works
const one = 20 const second = 30; 
    OUTPUT doesnt work because between them is no ;

const variable1 = 10;
const variable2 = variable1;
const variable3 = "Zach";
const variable4 = {
    variableType: "object",
    variableValue: "some value",
};
const variable5 = (function (){
    return "Hello, my name is ";
})();
const variable6 = variable5 + variable3;
console.log(variable6)
    OUTPUT Hello, my name is Zach


const variable1 = 10;
const variable2 = "some value";
const variable3 = false;
const variable1: number = 10;
typeof variable1;
    OUTPUT "number"
typeof variable2;
    OUTPUT "string"
typeof variable3;
    OUTPUT "boolean"

variable 1 + variable 2 
    OUTPUT "10some value"

const number1 = '10';
const number2 = 20;
typeof number1
    OUTPUT "string"
typeof number2
    OUTPUT "number"
number 1 + number 2
    OUTPUT "1020"
Number(number1) + number2
    OUTPUT 30


const a = 20; 
let b = 20; 
var c = 20; (its not recommended to use var anymore)
const valueWillNotChange = 20;
ValueWillNotChange = 40;
let valueWillChange = 20;
ValueWillChange = 40;