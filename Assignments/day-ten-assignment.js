// DAY-10 Assignment

const INVALID_INPUT = "INVALID INPUT";

// 1. If user is 18 or older , give feedback: 'You are allowed to Marry'
// but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const user = {
  firstName: "Suyash",
  lastName: "Lawand",
  age: 20,
};

user.age >= 18
  ? console.log("You are allowed to Marry")
  : console.log(`Wait for ${18 - user.age} years.`);

// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to
//console stating who is older.
// Enter your age: 30
// You are 5 years older than me.
const myAge = 30;
const yourAge = 31;

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} year(s) older than you.`);
} else if (myAge < yourAge) {
  console.log(`You're ${yourAge - myAge} year(s) older than me`);
} else if (myAge === yourAge) {
  console.log("We're of same age.");
}

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge '
// else 'myAge is less than yourAge'. Try to implement it in two ways.
function getAgeMessage(myAge, yourAge) {
  if (myAge > yourAge) {
    return `${myAge} is less than ${yourAge}`;
  } else if (myAge < yourAge) {
    return `${yourAge} is greater than ${myAge}`;
  } else if (myAge === yourAge) {
    return "We're of same age.";
  }
}

const getAgeMessageInAnotherWay = (myAge, yourAge) =>
  myAge > yourAge
    ? `${myAge} is less than ${yourAge}`
    : myAge < yourAge
    ? `${yourAge} is greater than ${myAge}`
    : "We're of same age.";

console.log(getAgeMessage(23, 18));
console.log(getAgeMessageInAnotherWay(18, 23));

// 4. Check, if a number is even or not.
const randomNumber = Math.round(Math.random() * 100);
if (randomNumber % 2 === 0) {
  console.log(`${randomNumber} is even number.`);
} else {
  console.log(`${randomNumber} is odd number`);
}

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
function giveGradeFromScore(score) {
  if (score <= 100 && score >= 80) {
    return "A";
  } else if (score <= 79 && score >= 70) {
    return "B";
  } else if (score <= 69 && score >= 60) {
    return "C";
  } else if (score <= 59 && score >= 50) {
    return "D";
  } else if (score <= 49 && score >= 0) {
    return "F";
  } else return INVALID_INPUT;
}

console.log(giveGradeFromScore(randomNumber));

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer
function getSeasonByMonth(month) {
  const winterMonths = ["December", "January", "February"];
  const rainyMonths = ["September", "October", "November"];
  const summerMonths = ["April", "May", "June", "July", "August"];
  const springMonths = ["March"];

  if (winterMonths.includes(month)) {
    return "The season is winter";
  } else if (rainyMonths.includes(month)) {
    return "The Season is rainy.";
  } else if (summerMonths.includes(month)) {
    return "The Season is summer.";
  } else if (springMonths.includes(month)) {
    return "The Season is Spring";
  } else return INVALID_INPUT;
}

console.log(getSeasonByMonth("April"));

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
function getWorkingDayMessage(day) {
  const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekendDays = ["Saturday", "Sunday"];

  if (workingDays.includes(day)) {
    return "Working Day";
  } else if (weekendDays.includes(day)) {
    return "Weekend Day";
  } else return INVALID_INPUT;
}

// 8. Write a program which tells the number of days in a month.
function tellNumberOfDaysInMonth(month) {
  switch (month) {
    case "January":
      console.log(`${month} has 31 Days`);
      break;

    case "February":
      console.log(`${month} has 28/29 Days`);
      break;

    case "March":
      console.log(`${month} has 31 Days`);
      break;

    case "April":
      console.log(`${month} has 30 Days`);
      break;

    case "May":
      console.log(`${month} has 31 Days`);
      break;

    case "June":
      console.log(`${month} has 30 Days`);
      break;

    case "July":
      console.log(`${month} has 31 Days`);
      break;

    case "August":
      console.log(`${month} has 31 Days`);
      break;

    case "September":
      console.log(`${month} has 30 Days`);
      break;

    case "October":
      console.log(`${month} has 31 Days`);
      break;

    case "November":
      console.log(`${month} has 30 Days`);
      break;

    case "December":
      console.log(`${month} has 31 Days`);
      break;

    default:
      console.log(INVALID_INPUT);
  }
}

tellNumberOfDaysInMonth("May");

// 9. Write a program to check whether the year is leap year or not.
const checkLeapYear = (year) =>
  year % 4 === 0 ? "Leap Year" : "Not Leap Year";
console.log(checkLeapYear(2024));

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2).
// If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3).
// If condition3 is true, set the result to 'C', otherwise set it to 'D'.
function checkCondition() {
  const condition1 = true;
  const condition2 = false;
  const condition3 = false;

  return condition1 ? (condition2 ? "A" : "B") : condition3 ? "C" : "D";
}

console.log(checkCondition());


// 11. What will be the result of the following nested ternary expression:
// let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
// console.log(result);
// D Will  be output
