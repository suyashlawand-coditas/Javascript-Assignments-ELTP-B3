// Day - 9 Assignment


// Check if type of '70' is equal to 70
function checkTypeEquality(a, b) {
    if (typeof a === typeof b) {
        console.log("Both variables are of same type");
    } else {
        console.log("Both variables are of different type");
    }
}

checkTypeEquality('70', 70); // Both variables are of different type

// Check if parseInt('8.8') is equal to 9
if (parseInt('8.8') === 9) {
    console.log("parseInt('8.8') is equal to 9");
} else {
    console.log("parseInt('8.8') is not equal to 9");
}

// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
console.log("''", "is Falsy :", Boolean(''));
console.log(0, "is falsy :", Boolean(0));
console.log(null, "is falsy :", Boolean(null));
console.log(undefined, "is falsy :", Boolean(null));
console.log(NaN, 'is', Boolean(NaN));
console.log(false, "Will also evaluate to", Boolean(false));


// Write five JavaScript statement which provide truthy  value.
console.log('Non Empty String is', Boolean('Non Empty String is'));
console.log(1, 'Any Number except 0 is');
console.log([], 'Arrays are ', Boolean([]));
console.log({}, 'Objects are also', Boolean({}));
console.log(20, 'is also', Boolean(20));
console.log(true, "is also truthy");

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4  // true
// 4 >= 3 // true
// 4 < 3 // false
// 4 <= 3 // false
// 5 == 5 // true
// 9 === 9 // true
// 9 == '9' // true
// 8 === '8' // false (type is not same)
// 4 != 4 // false
// 4 !== 4 // false
// 4 != '4' // false
// 4 != '4' // false
// 4 !== '4' // true (type is not same)

// Find the length of python and jargon and make a falsy comparison statement.
// There is no 'on' in both dragon and python
console.log(!('python'.includes('on') && 'dragon'.includes('on')));


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) //  false
console.log(4 > 3 || 10 < 12) //  true
console.log(4 > 3 || 10 > 12) //  true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true