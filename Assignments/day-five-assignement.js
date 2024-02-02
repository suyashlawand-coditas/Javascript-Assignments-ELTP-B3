// DAY-5 Assignment

// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const sectionName = 'Easy JavaScript Assignments';

// Print the length of the string.
console.log(sectionName.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(sectionName.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(sectionName.toLocaleLowerCase());

// Slice out the first word of the string using substr() and substring() method
console.log(sectionName.substr(1));
console.log(sectionName.substring(1));

// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
const phrase = 'Easy JavaScript Assignments';
console.log(phrase.slice(5, 15));

// Check if the string contains a word Script using includes() method
console.log(phrase.includes('Script'));

// Split the string into an array using split() method
const phaseWordList = phrase.split();

// Split the string 'Easy JavaScript Assignments' at the space using split() method
const anotherPhase = 'Easy JavaScript Assignments';
console.log(anotherPhase.split(' '));

// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const givenStringToSplit = 'ELTP, BATCH, THREE';
console.log(givenStringToSplit.split(', '));

// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
const assignmentLevel = 'Easy JavaScript Assignments';
console.log(assignmentLevel.replace('JavaScript', 'Python'));

// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
const charAtIndex20 = 'Easy JavaScript Assignments'.charAt(20);
console.log(charAtIndex20);

// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
const demoPhrase = 'Easy JavaScript Assignments';
const indexOfJ = demoPhrase.indexOf('J');
console.log("Char Code of J is,", demoPhrase.charCodeAt(indexOfJ));

// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log('Easy JavaScript Assignments'.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log('Easy JavaScript Assignments'.lastIndexOf('a'))

// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.indexOf('Easy'));

// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf('Easy'));


// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.search('Easy'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log('       Easy JavaScript Assignments, Easy Easy             '.trim());

// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.startsWith('Easy'));

// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.endsWith("ts"));

// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log('Easy JavaScript Assignments'.match(/a/g).length);


// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy '.concat('Javascript'));

// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log("Easy JavaScript ".repeat(3));

// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const sentence = "Javascript is Easy, too Easy, too Easy, Easy to learn";
const count = sentence.split(" ").filter(word => word.includes('Easy')).length;
console.log(count);


// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn';
const countOfEasy = "Javascript is Easy, too Easy, too Easy, Easy to learn".match(/Easy/g).length;
console.log(countOfEasy);


// 28. Calculate the total annual income of the person by extracting the numbers from the following text.
const statement = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const incomeList = statement.split(' ').filter((e) => {
    return !isNaN(parseInt(e));
}).map(e => parseInt(e));

console.log("Income of Person is", incomeList.reduce((acc, i)=> acc + i, 0));