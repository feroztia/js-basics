/*
                    #1
function multiply(a, b){
  return a * b
}
        THE SAME FUNCTION BUT ARROW
multiply = (a, b) => a * b;

                    #2
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

                    #3
function solution(str){
  const arr = str.split("");
  const reversed = arr.reverse();
  const finalAnswer = reversed.join("");
  
  return finalAnswer;
}

                    #4
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

                    #5
function getCount(str) {
  let vowelsCount = 0;
  
  const arr = str.split("");
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a':
        vowelsCount++;
        break;
      case 'e':
        vowelsCount++;
        break;
      case 'i':
        vowelsCount++;
        break;
      case 'o':
        vowelsCount++;
        break;
      case 'u':
        vowelsCount++;
    }
  }
  
  return vowelsCount;
}


                    #6
function greet(name){

  if(name === "Johnny")
  return "Hello, my love!";
  
  return "Hello, " + name + "!";
}


                    #7
function isDivisible(n, x, y) {
  
  const result1 = n / x;
  const result2 = n / y;
  
  if (result1 % 1 === 0 && result2 % 1 === 0) {
    return true;
  } else {
    return false;
  }
  
}


                    #8
function makeNegative(num) {
    if (num < 0) {
        return num;
    } else {
        return num *- 1;
    }
}


                    #9
class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        
      const arrNumber = arrayOfNumbers[i];
      
      if (i === 0) {
        smallestNumber = arrNumber;
      }
      
      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;
      }
    }
    
    return smallestNumber;
  }
}

                    #10
var summation = function (num) {
  
  let sum = 0;
  
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    // or we can write sum+=i;
  }
  
  return sum;
}


                    #11
function getAverage(scoreArray){
  // Average sum(all the numbers) / count(all the numbers)
  const count = scoreArray.length;
  let sum = 0;
  
  for (let i = 0; i < count; i++) {
    sum = sum + scoreArray[i];
  }
  
  const avg = sum / count;
  const roundedDown = Math.floor(avg);
  
  return roundedDown;
  
}


                    #12
const rps = (player1, player2) => {
  if (player1 === 'rock') {
    if (player2 === 'rock') {
      return 'Draw!';
    }
    if (player2 === 'paper') {
      return 'Player 2 won!';
    }
    if (player2 === 'scissors') {
      return 'Player 1 won!';
    }
  }
  
    if (player1 === 'paper') {
      if (player2 === 'rock') {
        return 'Player 1 won!';
    }
      if (player2 === 'paper') {
        return 'Draw!';
    }
      if (player2 === 'scissors') {
        return 'Player 2 won!';
      }
  }
  
    if (player1 === 'scissors') {
      if (player2 === 'rock') {
        return 'Player 2 won!';
    }
      if (player2 === 'paper') {
        return 'Player 1 won!';
    }
      if (player2 === 'scissors') {
        return 'Draw!';
    }
  }
};


  Rock - r
  Paper - p
  Scissors - s
  
  Player 1            Player 2      Result
  r                   r             Draw
  r                   p             p2
  r                   s             p1
  p                   r             p1
  p                   p             Draw
  p                   s             p2
  s                   r             p2
  s                   p             p1
  s                   s             Draw

                    #13
function removeChar(str){
 
  const lengthOfString = str.length;
  return str.substr(1, lengthOfString - 2);

};

      OR
function removeChar(str) {
  return str.slice(1, -1);
}

                    #14
function positiveSum(arr) {
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  
  return sum;
}


                    #15
function basicOp(operation, value1, value2)
{
  
  let result; 
  
  switch (operation) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        result = value1 / value2;
        break;
  }
  
  return result;
}


                    #16
function repeatStr (numberOfRepeats, str) {
  
  let starterString = '';
  
  for (let i = 0; i < numberOfRepeats; i++) {
    starterString = starterString + str;
  }
  
  return starterString;
}

                    #17
function stringToArray(string){

	return string.split(" ");

}


                    #18
function noSpace(str){
  const arr = str.split(" ");
  
  let newArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    const trimmedString = arr[i].trim();
    newArray.push(trimmedString);
  }
  
  const finalString = newArray.join("");
  
  return finalString;
}


                    #19
function maps(arr){
  
  const result = arr.map((arrItem) => {
    return arrItem * 2;
  });
  
  return result;
}


                    #20
function hero(bullets, dragons){

  return bullets / dragons >= 2;
}


                    #21
function arrayPlusArray(arr1, arr2) {
  
  let sum = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    const arr1Value = arr1[i];
    const arr2Value = arr2[i];
    
    const addedValue = arr1Value + arr2Value;
    
    sum = sum + addedValue;
  }
  
  return sum;
}

                    #22
function century(year) {
  
  return Math.ceil(year/100);
}

                    #23
var humanYearsCatYearsDogYears = function(humanYears) {
  
  let catsAge;
  let dogsAge;
  
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }
  
  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }
  
  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 5;
  
  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}


                    #24
function points(gamesArray) {
  let totalPoints = 0;
  
  for (let i = 0; i < gamesArray.length; i++) {
    
    const value = gamesArray[i];
    
    const parts = value.split(":");
    
    const x = parts[0];
    const y = parts[1];
    
    if (x > y) {
      totalPoints = totalPoints + 3;
    } else if (x === y) {
      totalPoints = totalPoints + 1;
    } 
  }
  
  return totalPoints;
}
