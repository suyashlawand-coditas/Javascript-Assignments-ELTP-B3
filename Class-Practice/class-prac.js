const people = [
  { name: "Suyash" },
  { name: "James" },
  { name: "AR Rahman" },
  { name: "Mozart" },
  { name: "Beethoven" },
];

const justNames = people.map((person, index, arr) => {
  return person.name;
});

console.log(justNames);

const peopleWithStartingS = justNames.filter(
  (element) => element[0] === "S"
);
console.log(peopleWithStartingS);

const exampleNumbers = [1,2,3,4,5,6,7];
const sum = exampleNumbers.reduce((acc, i) => acc + i, 0);
const maxNumber = exampleNumbers.reduce((acc, i) => {
    console.log(acc, i);
    if (acc < i) {
        return i;
    }
    return acc;
}, 0);

const isEvenArray = exampleNumbers.every((element) => !(element % 2));  

