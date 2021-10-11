'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;
//const if = 23;



function logger() {
    console.log('My name is Jonas');
}

// Calling/ running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} has already retired`);
    }
    return retirement > 0 ? retirement : -1;
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//const avgDolphins = calcAverage(44, 23, 71);
//const avgKoalas = calcAverage(65, 54, 49);
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    else console.log("No team wins");
}

checkWinner(avgDolphins, avgKoalas);

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schemedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1])
    , calcAge(years[years.length - 1])];
console.log(ages);


//Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // first
friends.unshift('John'); // last


//Remove elements
friends.pop(); // Last
friends.shift();  // first

//Get index of element starting from zero
friends.indexOf('Steven') // return 1;

//includes - Return true if contain the element, false if not
friends.push(23);
friends.includes(23)


//Challenge #2
const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300
        ? billValue * 0.15 : billValue * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(calcTip(100));
console.log(tips);
console.log(total);


const jonas = {
    firstName: 'Jonas', //Each key is a property
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//Access object values
jonas.lastNames;  //dot notation - 'Schmedtmann'
jonas['lastName']; //bracket notation - 'Schmedtmann'


console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
jonas['first' + nameKey];
jonas['last' + nameKey];
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestIn]) {
    console.log(jonas[interestIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length
    } friends, and his bestfriend is called ${jonas.friends[0]}`);


const jonas = {
    firstName: 'Jonas', //Each key is a property
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // },

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()
            }-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'
            } driver's license`;
    }
};

console.log(jonas.calcAge()); // 46

//Challenge
console.log(jonas.getSummary());

//Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

let summary = '';

if (mark.calcBMI() > john.calcBMI()) {
    summary = `${mark.fullName}'s BMI (${mark.bmi
        }) is higher than ${john.fullName}'s (${john.bmi})`;
}
else if (mark.bmi < john.bmi) {
    summary = `${john.fullName}'s BMI (${john.bmi
        }) is higher than ${mark.fullName}'s (${mark.bmi})`;
} else {
    summary = `${john.fullName}'s BMI (${john.bmi
        }) is equal to ${mark.fullName}'s (${mark.bmi})`;
}
console.log(summary);


console.log('Lifting weights repetition 1 🏋️‍♂️');

for (let rep = 5; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
};

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const arrayType = [];
for (let i = 0; i < jonasArray.length; i++) {
    //arrayType.push(typeof jonasArray[i])
    arrayType[i] = typeof jonasArray[i];
    console.log(jonasArray[i]);
}
console.log(arrayType);

const years = [1991, 2007, 1969, 2020];
const ages = []
for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
}
console.log(ages);

//continue and break
console.log('------STRING ONLY-------')
for (let i = 0; i < jonasArray.length; i++) {
    //arrayType.push(typeof jonasArray[i])
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i]);
}

console.log('------BREAK WITH NUMBER-------')
for (let i = 0; i < jonasArray.length; i++) {
    //arrayType.push(typeof jonasArray[i])
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i]);
}


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray.length; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}
for (let i = 0; i < 5; i++) {
    console.log(`Big loop${i}`);
    for (let x = 0; x < 10; x++) {
        console.log(`Small loop ${x}`);
    }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = billValue => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
*/

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log();
