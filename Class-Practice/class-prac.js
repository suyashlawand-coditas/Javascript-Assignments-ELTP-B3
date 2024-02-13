const person = {
  name: "Suyash",
  tech: "Backend",
  height: 8,
};

const personKeys = Object.keys(person);
for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(key, person[key]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const key in numbers) {
  console.log(key);
}

for (const key in person) {
  console.log(key);
}
