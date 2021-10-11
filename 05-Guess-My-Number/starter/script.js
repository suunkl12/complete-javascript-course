'use strict';

/*
console.log(document.querySelector('.message').textContent);

let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 10000);
});

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = highScore < score ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💔 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     document.querySelector('.score').textContent = --score;
    //   } else {
    //     document.querySelector('.message').textContent = '💔 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   //When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     document.querySelector('.score').textContent = --score;
    //   } else {
    //     document.querySelector('.message').textContent = '💔 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
