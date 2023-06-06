/*
if ('some string' === 'another string') {
    console.log('the strings are equal');
} else {
    console.log('the strings are not equal');
} 
    OUTPUT: the strings are not equal

    if () {} else {}


const myExpression = (20 === 20) && (50 === 50);


            CONDITIONALS

const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber; // true
// Only using an if statement (no "else" statement required here)
if (jsExpression) {
    console.log('this expression is true');
}

// an if-else statement
if (jsExpression) {
    console.log('this expression is true');
} else {
    console.log('this expression is false');
}

//Adding another "code path" with "else if"
// Hint: you can use as many "else if" statements as you want
if (jsExpression) {
    console.log('the expression is true');
} else if (firstNumber > 0) {
    console.log('the expression is false and the firstNumber is greater than 0');
} else {
    console.log('expression false, and firstNumber 0 or less');
}

// works the same, just formatted differently
if (jsExpression) { console.log('just a different formatting') };
this expression is true
this expression is true
the expression is true
just a different formattion

const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

// gets a random value from array
const randomIndex = Math.floor(Math.random() * colors.length );

const randomColor = colors[randomIndex];

if (randomColor === 'orange') {
    console.log('the color is 'orange');
} else if (randomColor === 'green') {
    console.log('the color is 'green');
} else if (randomColor === 'yellow') {
    console.log('the color is 'yellow');
} else if (randomColor === 'purple') {
    console.log('the color is 'purple');
} else if (randomColor === 'blue') {
    console.log('the color is 'blue');
} else {
    console.log('no color found');
}