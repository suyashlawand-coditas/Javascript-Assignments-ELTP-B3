// Declare an empty array;
const workExperienceHistoryArray = [];

// Declare an array with more than 5 number of elements
const randomNumbers = [1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log("Length of Array:", randomNumbers.length); // 7

// Get the first item, the middle item and the last item of the array
function getFirstLastAndMiddleElement(array) {
  if (array.length === 0) {
    console.log("Got An Empty Array");
  } else {
    console.log("First Element:", array[0]);
    console.log("Middle Element:", array[Math.round(array.length / 2) - 1]);
    console.log("Last Element:", array[array.length - 1]);
  }
}

getFirstLastAndMiddleElement(randomNumbers);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// The array size should be greater than 5
const mixedDataTypes = [
  false,
  true,
  "2",
  "three",
  5,
  null,
  { name: "suyash" },
  [96],
];
console.log("Length if mixedDataTypes:", mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Coditas",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log("No. of IT Companies :", itCompanies.length);

// Print the first company, middle and last company
getFirstLastAndMiddleElement(itCompanies);

// Print out each company
for (const company of itCompanies) {
  console.log(company);
}

// Change each company name to uppercase one by one and print them out
for (const company of itCompanies) {
  console.log(company.toUpperCase());
}

// Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "));

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompanyExistence = (companyToCheck) => {
  // Without Using Iterator.
  for (const company of itCompanies) {
    if (company.toLowerCase() === companyToCheck.toLowerCase()) {
      return company;
    }
  }
  return "Company Not Found";
};

console.log(checkCompanyExistence("coditas"));

// Filter out companies which have more than one 'o' without the filter method
function hasMoreThanOneOh(companyList) {
  const result = [];
  for (const company of companyList) {
    if (company.split("o").length > 2) {
      result.push(company);
    }
  }
  return result;
}

console.log(hasMoreThanOneOh(itCompanies));

// Sort the array using sort() method
console.log("Sorted", randomNumbers.sort());

// Sort the array by country name length without sort:
let countriesToSort = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "India",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

for (let i = 0; i < countriesToSort.length - 1; i++) {
  for (let j = 0; j < countriesToSort.length - i - 1; j++) {
    if (countriesToSort[j].length > countriesToSort[j + 1].length) {
      // Swap elements
      let temp = countriesToSort[j];
      countriesToSort[j] = countriesToSort[j + 1];
      countriesToSort[j + 1] = temp;
    }
  }
}

console.log("Sorted Array by Country Name Length:", countriesToSort);

console.log(countriesToSort);

// Reverse the array using reverse() method.
console.log("Reversed", randomNumbers.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);

const slicedCompanies = itCompanies
  .slice(0, middleIndex)
  .concat(itCompanies.slice(middleIndex + 1));
console.log(slicedCompanies);

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length / 2);

if (itCompanies.length % 2 === 1) {
  itCompanies.splice(middleIndex, 1); // Remove one element
} else {
  itCompanies.splice(middleIndex - 1, 2); // Remove two elements
}

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
for (let index = 0; index < itCompanies.length - 1; index++) {
  itCompanies.pop();
}

console.log(itCompanies);

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango";
const punctuations = [".", ",", "?"];
const textSolution = text
  .split("")
  .filter((char) => !punctuations.includes(char))
  .join("");

console.log(textSolution);
console.log("Word Count", textSolution.split(" ").length);

// 25. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Rasmalai");

// add Gulabjamun at the end of you shopping cart if it has not been already added
shoppingCart.push("Gulabjamun");

// remove 'Honey' if you are allergic to honey
const indexToRemove = shoppingCart.indexOf("Honey");
if (indexToRemove !== -1) {
  shoppingCart.splice(indexToRemove, 1);
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
const indexToModify = shoppingCart.indexOf("Tea");
if (indexToModify !== -1) {
  shoppingCart[indexToModify] = "Green Tea";
}
console.log(shoppingCart);

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'.
// If it does not exist add to the countries list.
const countriesList = ["India", "Nepal", "China", "USA"];
if (countriesList.includes("India")) {
  console.log("India");
} else {
  countriesList.push("India");
}

// 27. In the webTechs array check if Sass exists in the array and if it exists print
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "India",
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

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


ages.sort((a, b) => a - b);


const minAge = ages[0];
const maxAge = ages[ages.length - 1];


let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages.length / 2 - 1;
  const mid2 = ages.length / 2;
  medianAge = (ages[mid1] + ages[mid2]) / 2;
} else {
  const mid = Math.floor(ages.length / 2);
  medianAge = ages[mid];
}

const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

const rangeAges = maxAge - minAge;

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);


const firstTenCountries = countries.slice(0, 10);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", rangeAges);
console.log("Difference between Min and Average:", diffMinAverage);
console.log("Difference between Max and Average:", diffMaxAverage);
console.log("First Ten Countries:", firstTenCountries);

// Find the middle countries in the countries array.
let middleCountries;
if (countries.length % 2 === 1) {
  const middleIndex = Math.floor(countries.length / 2);
  middleCountries = [countries[middleIndex]];
} else {
  const middleIndex1 = countries.length / 2 - 1;
  const middleIndex2 = countries.length / 2;
  middleCountries = [countries[middleIndex1], countries[middleIndex2]];
}

console.log("Middle Countries:", middleCountries);

// Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half

let firstHalfCountries, secondHalfCountries;

if (countries.length % 2 === 0) {
  const halfIndex = countries.length / 2;
  firstHalfCountries = countries.slice(0, halfIndex);
  secondHalfCountries = countries.slice(halfIndex);
} else {
  const halfIndex = Math.ceil(countries.length / 2);
  firstHalfCountries = countries.slice(0, halfIndex);
  secondHalfCountries = countries.slice(halfIndex);
}

console.log("First Half Countries:", firstHalfCountries);
console.log("Second Half Countries:", secondHalfCountries);
