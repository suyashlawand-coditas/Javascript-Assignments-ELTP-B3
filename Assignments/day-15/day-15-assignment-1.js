// DAY -15 ASSIGNMENT  (LOOPS)
// NOTE: You guys can use (for, for of, for in, while, do while loop), whichever you feel is best.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// (1) Iterate 0 to 10 using for loop, do the same using while and do while loop
let counter = 0;
while (counter <= 10) {
  console.log(`Counter in While Loop: ${counter}`);
  counter += 1;
}

for (let forCounter = 0; forCounter <= 10; forCounter++) {
  console.log(`Counter in For Loop: ${forCounter}`);
}

counter = 0;
do {
  console.log(`Counter in Do While Loop: ${counter}`);
  counter += 1;
} while (counter <= 10);

// (2) Iterate 10 to 0 using for loop, do the same using while and do while loop
// Iterate 0 to n using for loop
counter = 10;
while (counter >= 0) {
  console.log(`Counter in While Loop: ${counter}`);
  counter -= 1;
}

for (let forCounter = 10; forCounter >= 0; forCounter--) {
  console.log(`Counter in For Loop: ${forCounter}`);
}

counter = 10;
do {
  console.log(`Counter in Do While Loop: ${counter}`);
  counter -= 1;
} while (counter >= 0);

// (4.) Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
const printPattern = (maxHashLength) => {
  for (let index = 1; index <= maxHashLength; index++) {
    const hashArray = new Array(index).fill("#");
    console.log(hashArray.join(""));
  }
};

printPattern(7);

// (5.) Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for (let index = 0; index < 10; index++) {
  console.log(`${index} ${index ** 2} ${index ** 3}`);
}

// (5.) Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index <= 100; index += 2) {
  console.log(index);
}

// (6.) Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 1; index <= 100; index += 2) {
  console.log(index);
}

// (7.) Use for loop to iterate from 0 to 100 and print only prime numbers
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

for (let index = 0; index < 100; index++) {
  isPrime(index) ? console.log(index) : null;
}

// (8.) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let additionResult = 0;
for (let index = 0; index <= 100; index++) {
  additionResult += index;
}

console.log(`Result of Addition from 0 - 100 is ${additionResult}`);

// (9.) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenAdditionResult = 0;
let oddAdditionResult = 0;
for (let index = 0; index <= 100; index++) {
  index % 2 ? (oddAdditionResult += index) : (evenAdditionResult += index);
}

console.log(
  `Result of adding even numbers form 0 to 100: ${evenAdditionResult}`
);
console.log(`Result of adding odd numbers form 0 to 100: ${oddAdditionResult}`);

// (10.) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. // O/P:   [2550, 2500]
const resultsOfAddition = [0, 0];
for (let index = 0; index <= 100; index++) {
  index % 2 ? (resultsOfAddition[1] += index) : (resultsOfAddition[0] += index);
}
console.log(resultsOfAddition);

// (11.) Develop a small script which generate array of 5 random numbers
const randomNumberArray = [];
while (randomNumberArray.length < 5) {
  randomNumberArray.push(Math.round(Math.random() * 100));
}
console.log(`Array with 5 Random Elements: ${randomNumberArray.join(" ")}`);

// (12.) Develop a small script which generate array of 5 random numbers and the numbers must be unique
const generateRandomUniqueArray = () => {
  const result = [];
  while (result.length < 5) {
    const randomNumber = Math.round(Math.random() * 100);
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
};

console.log(`Generated random array: ${generateRandomUniqueArray().join(" ")}`);

// (13.) Develop a small script which generate a six characters random id: //iuyt56
function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

const randomId = generateRandomId();
console.log(randomId);

// (14.) Develop a small script which generate any number of characters random id.
function generateRandomIdOfRandomLength() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomLength = Math.ceil(Math.random() * 20);
  let randomId = "";

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

const anotherRandomId = generateRandomIdOfRandomLength();
console.log(anotherRandomId);

// (15.) Write a script which generates a random hexadecimal number.
function generateRandomHexadecimal(length) {
  const characters = "0123456789ABCDEF";
  let hexadecimalPrefix = "0x";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    hexadecimalPrefix += characters[randomIndex];
  }

  return hexadecimalPrefix;
}

// Generate a random hexadecimal number with 6 characters
const randomHexadecimal = generateRandomHexadecimal(6);
console.log(randomHexadecimal);

// (16.) Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countriesInUpperCase = countries.map((country) => country.toUpperCase());
console.log(`Desired Array: ${countriesInUpperCase.join(" ")}`);

// (17.) Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLength = countries.map((country) => country.length);
console.log(`Desired Array: ${countriesLength.join(" ")}`);

// (18.) Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
const countriesAlongWithCodeAndLength = countries.map((country) => [
  country,
  country.slice(0, 3).toLocaleUpperCase(),
  country.length,
]);

console.log(countriesAlongWithCodeAndLength);

// (19.) In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array.
// If there is no country containing the word 'land',
// print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
const checkLandAndPrintOutput = () => {
  const atleastOneCountryHasLand = countries.some((country) =>
    country.toLowerCase().includes("land")
  );
  if (!atleastOneCountryHasLand) {
    return "All these countries are without land";
  } else {
    return countries.filter((country) =>
      country.toLowerCase().includes("land")
    );
  }
};

console.log(checkLandAndPrintOutput());

// 20. Using the above countries array,
// find the country containing the biggest number of characters.
const findCountryWithMaximumLength = () => {
  const lengthOfLongestCountry = Math.max(
    ...countries.map((country) => country.length)
  );
  if (lengthOfLongestCountry === Number.NEGATIVE_INFINITY) {
    return null;
  }
  return countries.filter(
    (country) => country.length === lengthOfLongestCountry
  )[0];
};

console.log(findCountryWithMaximumLength());

// 21. Using the above countries array, find the country containing only 5 characters.
const countryWithFiveChars = countries.filter(
  (element) => element.length === 5
)[0];
console.log(countryWithFiveChars);

// 22. Find the longest word in the webTechs array.
const longestWord =
  webTechs.filter(
    (element) => element.length === Math.max(...webTechs.map((e) => e.length))
  )[0] || null;
console.log(longestWord);

// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const result = webTechs.map((tech) => [tech, tech.length]);
console.log(result);

// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app.
// Create the acronym MERN by using the array mernStack
const MERN = mernStack.map((tech) => tech[0].toUpperCase()).join("");
console.log(MERN);

// 25. Iterate through the array,
const technologies = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
// using a for loop or for of loop and print out the items.

for (const tech of technologies) {
  console.log(`The tech is: ${tech}`);
}

// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ["banana", "orange", "mango", "lemon"];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits);

// 27. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const fullStackAsFlat = fullStack.flat(1);
fullStackAsFlat.forEach((tech) => console.log(tech));

// OUTPUT:

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
