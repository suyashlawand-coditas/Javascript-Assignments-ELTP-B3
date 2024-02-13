// DAY 15 Assignment (FUNCTIONS)

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  const winterMonths = ["december", "january", "february"];
  const rainyMonths = ["september", "october", "november"];
  const summerMonths = ["april", "may", "june", "july", "august"];
  const springMonths = ["march"];

  month = month.toLowerCase();

  if (winterMonths.includes(month)) {
    return "Winter";
  } else if (rainyMonths.includes(month)) {
    return "Rainy";
  } else if (summerMonths.includes(month)) {
    return "Summer";
  } else if (springMonths.includes(month)) {
    return "Spring";
  } else return INVALID_INPUT;
};

console.log(checkSeason("January"));

// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(number1, number2, number3) {
  let max = number1;
  if (number2 > max) {
    max = number2;
  }

  if (number3 > max) {
    max = number3;
  }

  return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  const temp = x;
  x = y;
  y = temp;

  console.log(`x: ${x}, y: ${y}`);
}

swapValues(2, 3);

// 5. Write a function generateColors which can generate any number of hexa or rgb colors;
const generateColors = (colorType, numberOfColors) => {
  switch (colorType.toLowerCase()) {
    case "rgb":
      const colorInArray = Array.from({ length: numberOfColors }, () => [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ]);

      return numberOfColors === 1
        ? colorInArray.map((rgbColor) => `rgb(${rgbColor.join(", ")})`)[0]
        : colorInArray.map((rgbColor) => `rgb(${rgbColor.join(", ")})`);

    case "hexa":
      const characters = "0123456789abcdef";
      const result = [];

      while (result.length < numberOfColors) {
        const color = "#".concat(
          Array.from(
            {
              length: 6,
            },
            () => characters[Math.floor(Math.random() * 16)]
          ).join("")
        );
        result.push(color);
      }
      return numberOfColors === 1 ? result[0] : result;
    default:
      break;
  }
};

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b'];
console.log(generateColors("hexa", 1)); // '#b334ef';
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)'];
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)';

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and
// return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
const modifyArray = (array) => {
  if (array.length < 5) {
    return "item not found";
  }

  array[4] = array[4].toUpperCase();
  return array;
};

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

// 7. Write a functions which checks if all items are unique in the array.
const checkForUnique = (arrayToCheck) => {
  const trackDuplicate = [];
  for (const element of arrayToCheck) {
    if (trackDuplicate.includes(element)) {
      return false;
    } else {
      trackDuplicate.push(element);
    }
  }

  return true;
};
console.log(
  checkForUnique(["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"])
);
console.log(
  checkForUnique([
    "Avocado",
    "Tomato",
    "Potato",
    "Mango",
    "LEMON",
    "Carrot",
    "Carrot",
  ])
);

// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
const sevenRandomNumbers = () => {
  const result = [];
  while (result.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
};

console.log(`Generated random array: ${sevenRandomNumbers().join(" ")}`);
