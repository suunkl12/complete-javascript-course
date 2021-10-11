/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let $function = 27;





let javascripIsFun = true;

console.log(typeof javascripIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascripIsFun = "YES!";
console.log(typeof javascripIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2^3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//Coding challenge #1
//TEST DATA 1;
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markMBI = markMass / markHeight ** 2;
let johnMBI = johnMass / johnHeight ** 2;

let markHigerBMI = markMBI > johnMBI;

console.log("Mark higher BMI: ", markHigerBMI);

//TEST DATA 2;
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

markMBI = markMass / markHeight ** 2;
johnMBI = johnMass / johnHeight ** 2;

markHigerBMI = markMBI > johnMBI;

console.log("Mark higher BMI: ", markHigerBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';  // bad
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // good
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



//Coding challenge #2
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

// const markMass = 95;
// const johnMass = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;

const markMBI = markMass / markHeight ** 2;
const johnMBI = johnMass / johnHeight ** 2;

if (markMBI > johnMBI) {
    console.log(`Mark's BMI (${markMBI}) is higher than John's (${johnMBI})! 💪`);
} else {
    console.log(`John's BMI (${johnMBI}) is higher than Mark's (${markMBI})! 💪`);
}



// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old'); //I am 23 years old
console.log('23' - '10' - 3); //10
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n -= 1; // 10
console.log(n);



console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //false
console.log(Boolean({})); //TRUE
console.log(Boolean('')); //false

const money = 0;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED'); //a bug because height is 0, not UNDEFINED
}



const age = '18';

if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
}

if (favourite !== 23) console.log('Why not 23?');



//////////////////////////////////////
//Coding Challenge #3
//TEST DATA
const dolphineFirstScore = 96;
const dolphineSecondScore = 108;
const dolphineThirdScore = 89;

const koalaFirstScore = 88;
const koalaSecondScore = 91;
const koalaThirdScore = 110;

//TEST DATA BONUS 1
// const dolphineFirstScore = 97;
// const dolphineSecondScore = 112;
// const dolphineThirdScore = 101;

// const koalaFirstScore = 109;
// const koalaSecondScore = 95;
// const koalaThirdScore = 123;

//TEST DATA BONUS 2
// const dolphineFirstScore = 97;
// const dolphineSecondScore = 112;
// const dolphineThirdScore = 101;

// const koalaFirstScore = 109;
// const koalaSecondScore = 95;
// const koalaThirdScore = 106;

const dolphineAvrageScore = (dolphineFirstScore + dolphineSecondScore + dolphineThirdScore) / 3;
const koalaAvrageScore = (koalaFirstScore + koalaSecondScore + koalaThirdScore) / 3;
console.log(dolphineAvrageScore, koalaAvrageScore);

if (dolphineAvrageScore > koalaAvrageScore && dolphineAvrageScore >= 100)
    console.log(`The Dolphine team won the trophy`);
else if (dolphineAvrageScore < koalaAvrageScore && koalaAvrageScore >= 100)
    console.log(`The Koala team won the trophy`);
else if (dolphineAvrageScore === koalaAvrageScore && dolphineAvrageScore >= 100)
    console.log(`Draw`);
else console.log(`No team wins the trophy 😢`);



const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepre theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday')
    console.log('Prepre theory videos');
else if (day === 'wednesday' || day === 'thursday')
    console.log('Write code examples');
else if (day === 'friday')
    console.log('Record videos');
else if (day === 'saturday' || day === 'sunday')
    console.log('Enjoy the weekend :D');
else console.log('Not a valid day');


3 + 4
1991
true && false & !false

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 18;
age >= 18 ? console.log('I link to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

*/

const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);