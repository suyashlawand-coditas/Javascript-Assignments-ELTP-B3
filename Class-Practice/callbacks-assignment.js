const customMap = (array, callbackFunction) => {
  const mappedArray = [];
  for (const element of array) {
    mappedArray.push(callbackFunction(element));
  }
  return mappedArray;
};

const customFilter = (array, filterCallbackFunction) => {
  const filteredArray = [];
  for (const element of array) {
    if (filterCallbackFunction(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

const customReduce = (array, callback, initialAccumulator) => {
  let accumulator = initialAccumulator;
  for (let index = 0; index < array.length; index++) {
    accumulator = callback(accumulator, array[i], i);
  }

  return accumulator;
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Reduce
console.log(customReduce(testArray, (acc, ele) => acc + ele, 0));

// Map
console.log(
  customMap(testArray, (element, index) => {
    return element ** 2;
  })
);

// Filter
console.log(customFilter(testArray, (element) => element % 2 === 0));
