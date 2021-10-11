'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  printAge();
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      //const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial,${firstName}`;
      console.log(str);
    }
    console.log(output);
    console.log(millenial);
  }
  return;
}

const firstName = 'Jonas';
calcAge(1991);


//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDelc(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));
console.log(addArrow);
function addDelc(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    const hihi = function () {
      console.log(this);
    };
    hihi();
    return 2037 - this.year;
  },
  calcAgeArrow: () => {
    console.log(this);
  },
};
//console.log(jonas.calcAge());
jonas.calcAgeArrow();

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); //this.year = 2037;

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this.year = 2017

const f = jonas.calcAge;

f();


//var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // console.log(2037 - this.year);
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
//jonas.greet();
jonas.calcAge();

const calc = function () {
  return x;
};
const x = 2;
console.log(calc());

//argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me, friend);


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
//marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Aria', 'John'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Huehue');
jessicaCopy.family.push('hihi');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
