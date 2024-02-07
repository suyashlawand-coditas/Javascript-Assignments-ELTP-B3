// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}


// isLogin ? age > 18 ? !isSuspended ? console.log('Login')
//     : console.log('acc suspended') :
//     console.log('small age') : console.log('not logged in')


const day = 1;

switch (day) {
    case 1:
        console.log("Hello World");
        break;

    case 2:
        console.log("Variables");
        break;

    case 3:
        console.log("Boolean");
        break;
    case 4:
        console.log("Strings");
        break;
    case 5:
        console.log("Arrays");
        break;

    case 6:
        console.log("Numbers")
        break;
    default:
        console.log("Invalid Input")
        break;
}


const age = 20;
const minimumAllowedAgeOne = 18;
const minimumAllowedAgeTwo = 24;
const minimumAllowedAgeThree = 30;


// if (age >= minimumAllowedAgeTwo) {
//     console.log('Allowed for two');
// } else if (age >= minimumAllowedAgeOne) {
//     console.log('Allowed for one');
// } else {
//     console.log('N A');
// }

age >= minimumAllowedAgeTwo ? console.log('Allowed for two') :
age >= minimumAllowedAgeOne ? console.log('Allowed for one') : 
age >= minimumAllowedAgeThree ? console.log('Allowed in section three') : console.log('N A');

