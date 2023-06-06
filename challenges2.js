/*
                        FIRST CHALLENGE
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
            OR
let numberVariable = 0;

numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;

console.log(numberVariable); // 3
    OUTPUT 3

                        SECOND CHALLENGE
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);
    OUTPUT false

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);
    OUTPUT true

                            THIRD CHALLENGE
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);
    OUTPUT
    const result = !((100 % 50) < (100 / 50) && 300 + 5 === 305);

                            FOURTH CHALLENGE
const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray [2]);
    OUTPUT true

                                FIFTH CHALLENGE
const myObj = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = 
    (myArray[0].price * myArray[0].quantity) >
    (myArray[1].price * myArray[1].quantity) >
    OUTPUT true