// (1) Create an empty object called cow
const cow = {};
// (2) Print the the cow object on the console
console.log(cow);

// (3) Add name, legs, color, age and sound properties for the cow object.
// The sound property is a method which return "maaah maaah"
cow.name = "cowi";
cow.legs = 4;
cow.color = "Black";
cow.age = 8;
cow.soundProperty = () => {
  return "Maah Maah.";
};

console.log(cow);

// (4) Get name, legs, color, age and sound value from the cow object
const { name, legs, age, soundProperty } = cow;
console.log(`Name: ${name}`);
console.log(`legs: ${legs}`);
console.log(`age: ${age}`);

// (5) Set new properties the cow object: breed, getCowInfo()
cow.breed = "Jersey";
cow.getCowInfo = () => {
  return `Name: ${cow.legs}\nLegs: ${cow.legs}`;
};
console.log(cow.getCowInfo());

// (6) Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const peopleWithManySkills = Object.entries(users)
  .filter(([, personObject]) => personObject.skills.length > 1)
  .map(([personName, personObject]) => ({
    personName,
    ...personObject,
  }));

console.log(peopleWithManySkills);

// (7) Count logged in users,
// count users having greater than equal to 30 points from the following object.
const activeUsersCount = Object.entries(users).filter(
  ([, personObject]) => personObject.isLoggedIn && personObject.points >= 30
).length;
console.log(activeUsersCount);

// (8) Find people who are MERN stack developer from the users object
const peopleWithMernSkill = Object.entries(users)
  .filter(([, personObject]) => personObject.skills.includes("MERN"))
  .map(([personName, personObject]) => ({
    personName,
    ...personObject,
  }));

console.log(peopleWithMernSkill);

// (9) Set your name in the users object without,
//  modifying the original users object
const newUser = {
  Suyash: {
    email: "suyash@hiresuyash.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const allUsers = { ...newUser, ...users };

// (10) Get all keys or properties of users object
const userProperties = Object.keys(users);
console.log(userProperties);

// (12) Get all the values of users object
const userValues = Object.values(users);
console.log(userValues);

// (13) Use the countries object to print a country name,
// capital, populations and languages.
// Assuming the countries object is structured like this:
const countries = {
  USA: {
    capital: "Washington D.C.",
    population: 328200000,
    languages: ["English"],
  },
  France: {
    capital: "Paris",
    population: 67200000,
    languages: ["French"],
  },
};

Object.entries(countries).forEach(
  ([countryName, { capital, population, languages }]) => {
    console.log(`Name of Country ${countryName}`);
    console.log(`Capital ${capital}`);
    console.log(`Population ${population}`);
    console.log(`Languages: ${languages.join(" ")}\n`);
  }
);

// (14) Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],

  get totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  get totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo() {
    return `Account Information for ${this.firstName} ${this.lastName}:\n
      Total Income: ${this.totalIncome}
      Total Expense: ${this.totalExpense}
      Account Balance: ${this.accountBalance()}`;
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance() {
    return this.totalIncome - this.totalExpense;
  },
};

// (15) Imagine you are getting the below users array of objects.
const usersFromApi = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// (16) Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
function addUser({ username, email, password }) {
  const userNameExist = usersFromApi.some((user) => user.username === username);
  const emailExits = usersFromApi.some((user) => user.email === email);

  if (userNameExist) {
    return { error: "username already exists." };
  } else if (emailExits) {
    return { error: "email already exits" };
  }

  usersFromApi.push({
    username,
    email,
    password,
    createdAt: new Date(Date.now()).toLocaleDateString(),
    isLoggedIn: false,
  });

  return { message: "user added!" };
}

const { message = "Error!" } = addUser({
  username: "suyashl13",
  email: "suyash.lawand@gmail.com",
  password: "password",
});

console.log(message);
console.log(usersFromApi);

// (17) Create a function called signIn which allows user to sign in to the application
function signIn({ email: providedEmail, password: providedPassword }) {
  const { password: correctPassword, email } = usersFromApi.filter(
    ({ email }) => email === providedEmail
  )[0];

  if (!correctPassword) {
    return { error: `User with email ${email} not found` };
  }

  if (providedPassword === correctPassword) {
    return { message: "logged in" };
  } else return { error: `Wrong password!` };
}

const authenticationMessage = signIn({
  email: "suyash.lawand@gmail.com",
  password: "password",
});

console.log(authenticationMessage);

// (18) The products array has three elements and each of them has six properties.
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// (19) Create a function called rateProduct which rates the product
function rateProduct(productId, {userId, rate}) {
  const productIndexToRate = products.indexOf(products.find(({_id})=> _id === productId));
  if (productIndexToRate === -1) {
    console.log(`Product with id ${productId} not found`);
    return;
  }
  products[productIndexToRate].ratings.push({userId, rate});
  
}

rateProduct('hedfqcg', { userId: '3e1dce', rate: 5 }); // Invalid id returns error message
rateProduct('hedfcg', { userId: 'D23dce', rate: 2 });

console.log(products);

// (20) Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  const productToRate = products.find(({_id})=> _id === productId);
  
  if (!productToRate) {
    console.log(`Product with id ${productId} not found.`);
    return;
  }

  const ratingArray = productToRate.ratings.map(({rate}) => rate);
  return console.log(ratingArray.reduce((acc, i)=>acc + i, 0) / ratingArray.length);
}

console.log("Rating:", averageRating('hedfcg'))


// (21) Create a function called like Product.
// This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeOrDislikeProduct(userId, productId) {
  const productToRate = products.find(({_id})=> _id === productId);
  const productIndexToRate = products.indexOf(productToRate);

  if (productIndexToRate === -1) {
    console.log(`Product with id ${productId} not found`);
    return;
  }

  const likedIndex = productToRate.likes.indexOf(userId)
  if (likedIndex !== -1) {
    products[productIndexToRate].likes.splice(likedIndex, 1);
  } else {
    products[productIndexToRate].likes.push(userId);
  }

  console.log(products);
}

likeOrDislikeProduct('userId', 'hedfcg')
