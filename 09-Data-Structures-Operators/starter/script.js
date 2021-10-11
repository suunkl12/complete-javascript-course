'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Compute property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`sat`]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours, //automatically assign the name
  // Remove function keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}ssssss and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // One argument is required, others are optionnal
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

/*
//Have to check undefined
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//ERROR
//console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example of working will nullish coalescing operator
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
//const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Can use continue and break,
for (const item of menu) console.log(item);

//Old way, to access index
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//New way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//My answer
// const players1 = game.players[0];
// const players2 = game.players[1];
//Answer
const [players1, players2] = game.players;

//My answer
// const [gk, ...fieldPlayers] = [...players1];
//Anser
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisin'];

const { team1, x: draw, team2 } = { ...game.odds };

function printGoals(...players) {
  // for (let i = 0; i < players.length; i++) {
  //   console.log(players[i]);
  // }
  console.log(players);
  console.log(`Number of goals: ${players.length}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//My answer
// console.log(
//   `Team ${
//     (team1 < team2 && '1') || (team1 > team2 && '2')
//   } is more likely to win`
// );
//Answer
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');




restaurant.numGuests = 0; // WON'T work with 0, will return 10
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

//Nullish: null and undefined ( Not 0 or '' or NaN)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// Use ANY data type, return ANY data type, short-circuiting
console.log('---- OR ----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23; // WON'T work with 0, will return 10
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.order && console.log(restaurant.order(0, 1));





restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//1)Destructuring

//SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects, take out saturday, REST take the rest
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // only fri and thur

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x); //only x will turn it into string or something


//Old ways of creating a new array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Sread operator take all individual component and placed it outside
const newArr = [1, 2, ...arr];
console.log(newArr); // [1 , 2, 7, 8 ,9]

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

// Build a new array with new value
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//Spread operator ... can only be used when building arrays or pass multiple arguments into a function
console.log(...str);
console.log('j', 'o');
//console.log(`${...str} Schmedtmann`);  Error

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Spread operator with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restauRantCopy = { ...restaurant };
restauRantCopy.name = 'Ristorante Roma';
console.log(restauRantCopy.name);
console.log(restaurant.name);


// Destructuring object argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

//Destructuring object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Change names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // wrap it in parenthesis
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4]; // Destructuring an array
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching variables without temp
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destruturing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //2, [5, 6];

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
