// 1. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof '10' === typeof 10) {
    console.log("Yes, typeof '10' is exactly equal to 10");
} else {
    console.log("Yes, typeof '10' is not exactly equal to 10");
    console.log("Lets Make it equal", typeof parseInt('10') === typeof 10);
}

// 2. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
if (parseFloat('9.8') === 10) {
    console.log("parseFloat('9.8') is equal to 10");
} else {
    // To make parseFloat('9.8') equal to 10, we will use ceil function.
    console.log(Math.ceil(parseFloat('9.8')));
}

// 3. Generate a random number between 0 and 100 inclusively.
const randomNumberBetween0to100 = Math.floor(Math.random() * 101);
console.log(randomNumberBetween0to100);

// 4. Generate a random number between 50 and 100 inclusively.
const randomNumberBetween50to100 = Math.floor(Math.random() * 51) + 50;
console.log(randomNumberBetween50to100);

// 5. Use console.log() and escape characters to print the following pattern.
function printPattern(count) {
    for (let counter = 1; counter <= count; counter++) {
        console.log( counter + '\t' + counter ** 0 + '\t' + counter ** 1 + '\t' + counter ** 2
        + '\t' + counter ** 3);

    }
}

printPattern(5)

// 6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function calculateAreaOfTriangle(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
        console.log("Base and height should be numbers");
        return null;
    }

    return 0.5 * base * height;
}

const result = calculateAreaOfTriangle(10, 15);
console.log(result);