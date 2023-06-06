/*
            ARITHMETIC OPERATORS
            + - * /
            % ** ++ --
const someRandomVariable = 20;
someRandomVariable;
    OUTPUT  20
console.log(someRandomVariable);
    OUTPUT  20

20 + 50;
    OUTPUT  70

50 - 20;
    OUTPUT  30

20/2
    OUTPUT  10

2*2
    OUTPUT  4

const result = 20 + 50 / 2;
result
    OUTPUT  45

100 % 50
    OUTPUT  0, частка 0, тому що ділиться націло

100 % 77
    OUTPUT  23

8 ** 2
    OUTPUT  64

let startNumber = 0;
startingNumber++;
startingNumber;
    OUTPUT  1
startingNumber++;
startingNumber;
    OUTPUT  2
startingNumber = startingNumber + 1;
startingNumber;
    OUTPUT  3
startingNumber--;
startingNumber;
    OUTPUT  2


                    ASSIGNMENT OPERATORS
                    = += -= *= /=
let x = 10; 
x = x + 5;
x;
    OUTPUT  15

let x = 10;
x+=5;
x;
    OUTPUT  15
x+=5
    OUTPUT 20
x-=5;
    OUTPUT  15  
x/=3
    OUTPUT  5
x*=2;
    OUTPUT  10


                    COMPARISON OPERATORS
                    == === != !== > < >= <=
const result = 20 > 18;
result
        OUTPUT true

const result2 = 20 === 20;
result2
        OUTPUT true
 
=== and !== are opposite 

const stringValue = '20';
const number = 20;
Number(stringValue);
stringValue == numberValue;
        OUTPUT true because it converts data and checks numbers
        doesnt care about data type
string Value === numberValue;
        OUTPUT false, because it didnt convert types to match each other
        it says data types are not the same and its not equal
        its recommended to use === better
Number(stringValue) === numberValue;
    OUTPUT true
const resultVariable = stringValue == numberValue;
resultVariable
    OUTPUT true
const numberValue = 20;
const stringValue = '20';
numberValue != stringValue;
    OUTPUT false
numberValue !== stringValue;
    OUTPUT true, !== says they're not equal and it's true that it's not equal
const myObj = {
    property1: 'some value',
    property2: 20
};
const myArray = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5];
myArray === anotherArray
    OUTPUT false
const anotherObj = {
    property1: 'some value',
    property2: 20
};
myObj === anotherObj
    OUTPUT false
myObj == anotherObj
    OUTPUT false
myArray == anotherArray
    OUTPUT false

const result = 20 === 20 ? 'values match' : 'values do not match';
result
OUTPUT 
    OUTPUT "values match"
if (20 === 20) {
    resultVariable = 'values match';
} else {
    resultVariable = 'values do not match';
}
    OUTPUT "values match"
resultVariable
    OUTPUT "values match"


                        LOGICAL OPERATORS
                        && || !
20 === 20 && 10 === 10 
    OUTPUT true
    20 === 20 && 10 === 12
    OUTPUT false
20 === 20 || 10 === 12
    OUTPUT true
|| means or 
20 === 18 || 10 === 12
    OUTPUT false
!(20 === 20)
    OUTPUT false
const isUserLoggedIn = true;
const doesUserHavePermission = false;
const canUserPerformAction = isUserLoggedIn && doesUserHavePermission

const result = !((40 / 20) == 2 && true || ('yes' === 'no'));
result
    OUTPUT false
const step1 = 40 / 20;
const step2 = step1 === 2;
step2
    OUTPUT true
const step3 = step2 && true;
step3
    OUTPUT true
const step4 ='yes' === 'no';
const step5 = step3 || step4;
step5
    OUTPUT true
const step6 = !step5;
step6
    OUTPUT false

const result = (() => {
    return 20;
})();
result
    OUTPUT 20

