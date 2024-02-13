const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// (1) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const universalConstants = {
    e: Math.E,
    pi: Math.PI,
    gravity: 9.81,
    humanBodyTemperature: 37,
    waterBoilingTemp: 100
}

const { pi: PI, e: E, gravity, humanBodyTemperature, waterBoilingTemp } = universalConstants;

console.log(PI, E, gravity, humanBodyTemperature, waterBoilingTemp);

// (2) Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

console.log("fin:", fin);
console.log("est:", est);
console.log("sw:", sw);
console.log("den:", den);
console.log("nor:", nor);


// (3) Destructure the rectangle object by its properties or keys.
const { width, height, color } = rectangle;

console.log("Width:", width);
console.log("Height:", height);
console.log("Color:", color);

// (4) Iterate through the users array and get all the keys of the object using destructuring
users.forEach(({ name, age, scores, skills })=>{
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Scores: ${scores}`);
    console.log(`Skills: ${skills}\n`);
});

// (5) Find the persons who have less than two skills
const usersWithLessSkills = users.filter(({skills})=>skills.length < 2);
console.log(usersWithLessSkills);

// (6)Destructure the countries array print name, capital, population and languages of all countries
const countryList = [
  {
    name: 'USA',
    capital: 'Washington D.C.',
    population: 331002651,
    languages: ['English']
  },
  {
    name: 'India',
    capital: 'New Delhi',
    population: 1380004385,
    languages: ['Hindi', 'English']
  },
  {
    name: 'China',
    capital: 'Beijing',
    population: 1439323776,
    languages: ['Mandarin']
  },
];

countryList.forEach(({ name, capital, population, languages }) => {
  console.log(`Country: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages.join(', ')}\n`);
});



// (7) Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const [name, skills, [jsScore, reactScore]] = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(name, skills, jsScore, reactScore)

// (9.) Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const studentCopy = {...student};
studentCopy.skills.frontEnd.push({skill:'Bootstrap ',level:8});
studentCopy.skills.backEnd.push({skill:'Express',level:9});
studentCopy.skills.dataBase.push({skill:'SQL',level:8});
studentCopy.skills.dataScience.push({skill:'SQL',level:8});

console.log(studentCopy)