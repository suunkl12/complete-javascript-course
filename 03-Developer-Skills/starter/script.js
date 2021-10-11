// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -8, -1, 'error', 8, 13, 29, 15, 14, 9, 5];

function clcAverageAmplitude(temp1, temp2) {
  const temps = temp1.concat(temp2);

  let minTemp = 0;
  let maxTemp = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') {
      debugger;
      if (minTemp > temps[i] || minTemp === 'error') minTemp = temps[i];
      if (maxTemp < temps[i] || maxTemp === 'error') maxTemp = temps[i];
    }
  }
  console.log(minTemp, maxTemp);
  return minTemp === 'error' && maxTemp === 'error'
    ? 'error'
    : maxTemp - minTemp;
}
console.log(clcAverageAmplitude([2, 3, 4], [5, 7, 8]));


const measureKelvin = function () {
  //Breakpoint here
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celsius')),
  };

  console.table(measurement);

  const kelvin = measurement.value + 273; //Breakpoint here
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());


const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log('... ' + str);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a += b;

  return a;
};

function second(x, y) {
  console.log(this);
  var c = 2;
  return c;
}
if (true) {
  var b = 3;
}
const x = first();
console.log(x);
console.log(b);
