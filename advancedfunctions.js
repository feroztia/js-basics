/*
function myFunction() {
    console.log('hello world');
}

const myVar = 20;

typeof myFunction
    OUTPUT "function"

myFunction();
    OUTPUT hello world

(function anotherFunction() {
    console.log('hello');
})();
    OUTPUT hello

                PARAMETERS AND ARGUMENTS
function myFunction(someNumber, someString){
    console.log(someNumber);
    console.log(someString);
}
myFunction(20, 'some string');
        # someNumber is parameter, 20 is argument
        someString is parameter, 'some string' is argument



                    EXAMPLE
function myFunction () {
    console.log('something');
}
const anotherFunction = function () {
    console,log('another thing');
}
typesof anotherFunction 
    OUTPUT "function"
myFunction();
    OUTPUT something
anotherFunction();
    OUTPUT another thing


                Example2
const arrowFunction = () => {
    console.log("I am an arrow function");
}
arrowFunction();
    OUTPUT I am an arrow function

                Example3 just the general view of arrow function
() => {

}
function()

            RETURN FUNCTIONS
const myFunction = () => {
    console.log('log something');
}
const result = myFunction();
    OUTPUT something
result
    OUTPUT undefined
    thats why we use return function!!!!!

const returnFunction = () => {
    const a = 20;
    return a;
}
const result = returnFunctuin();
result
    OUTPUT 20

const myFunction = () => {
    const a = 20;
        return a < 30; // true
}
const result2 = myFunction();
result2
    OUTPUT true


                EXAMPLE4
const myFunction = () => {
    let myNumber = 20;
    return myNumber;
    myNumber = 50;
}
myFunctiion();
    OUTPUT 20
    never returns 50 :(


        ANOTHER EXAMPLE
const myNumber = 20;
let myFunction = () => {
    if (myNumber < 50) {
        return 'returned the function early';
    }

    return 40;
}

myFunction();
    OUTPUT "returned the function early"
