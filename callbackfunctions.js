/*
                        CALLBACK FUNCTION
function myCallback(someNumber) {
    return someNumber * 2;
}
function mainFunction(randomNumber, shouldCall, callback) {

    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, myCallback);
    OUTPUT: 40

                        SIMPLIFIED VERSION
function mainFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, (num) => num * 2);


                        ANOTHER SIMPLE VERSION
mainFunction(20, true, function(num) {
    return num * 2;
})
OR
mainFunction(20, true, (num) => {
    return num *2;
})


                MAP FUNCTION
const myArray = [2, 4, 6, 8];
function myCustomMapOperationCallback(itemFromArray) {
    return itemFromArray * 2;
}
const newArray = myArray.map(myCustomMapOperationCallback);
newArray
    OUTPUT: [4, 8, 12, 16]
const strArray = ['Hello', 'world', 'my', 'name', 'is', 'Lera'];
strArray.map(itemFromArray => itemFromArray[0])
    OUTPUT: ['H', 'w', 'm', 'n', 'i', 'L']

            ASYNCHRONOUS PROGRAMMING
its a code that doesnt run immediately!!!
