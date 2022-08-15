// With using *= operator 

// My current age
const myAge = 27;

// first 2 years of a dog
var earlyAge = 2;

// each early age of a dog counts as 10.5 years
earlyAge *= 10.5;

// subtract 2 years since we are accounting them in the early age. Mul
var laterAge = (myAge - 2);

// each later age year after 2 counts as 4 years. *= is the shorthand.

laterAge *= 4;

// Adding the early and later years together

const myAgeInDogYears = earlyAge + laterAge;

// my name

const myName = 'Pat';

// output on console using backticks

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);



// //Without Using *= operator 

// // I created a new variable named myAge and linked it to 27 and made it a constant 
// // since my age wont change. 

// const myAge = 27;

// // made a new variable named earlyAge that is linked the the number 2 for the first 2 years
// // and multipled it by 10.5 to equal the amount in dog years. 

// const earlyAge = 2 * 10.5;

// // created a new variable, laterYears, subtracted 2 from my years since we already account
// // the first 2 years in earlyAge. and will muiltiply 4 years to equal the amount of 
// // human years each dog year is after 2 years.
// const laterYears = (myAge - 2) * 4;

// // created a new variable, name myAgeInDogYears equal to the earlyAge variable plus the
// // laterAge variable
// const myAgeInDogYears = earlyAge + laterYears;

// const myName = 'Pat';

// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)




