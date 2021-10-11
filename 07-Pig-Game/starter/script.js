'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.getElementById('current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const holdButton = document.querySelector('.btn--hold');
const rollButton = document.querySelector('.btn--roll');
const resetButton = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

// value to track dice, current to track value on this turn
let value, current, score, activePlayer, playing;

const holdHandler = () => {
  if (!playing) return;
  switchPlayer(true);
};

const rollHandler = () => {
  if (!playing) return;
  value = Math.trunc(Math.random() * 6 + 1);
  if (value === 1) {
    dice.src = 'dice-1.png';
    switchPlayer(false);
  } else {
    dice.src = `dice-${value}.png`;
    updateCurrent(value);
  }
  dice.classList.remove('hidden');
};

const init = () => {
  rollButton.addEventListener('click', rollHandler);
  holdButton.addEventListener('click', holdHandler);
  current = 0;
  value = -1;
  activePlayer = 0;
  playing = true;
  current0.textContent = current1.textContent = 0;

  score = [0, 0];
  score0.textContent = score1.textContent = 0;

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  dice.classList.add('hidden');
};
init();

/**
 * Switch player
 * @param {*} isHolding whether the player is holding the score, if true, the current point will be added to the current player score
 */
const switchPlayer = isHolding => {
  if (isHolding) {
    score[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      winGame(activePlayer);
      return;
    }
  }

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  current = 0;
  current0.textContent = current1.textContent = current;
};

const updateCurrent = value => {
  current += value;
  document.getElementById(`current--${activePlayer}`).textContent = current;
};

/**
 * Win the game, if the argument is true, player 0 win, else player 1 win
 * @param {*} activePlayer is the first player win?
 */
const winGame = activePlayer => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  playing = false;
  dice.classList.add('hidden');
};

resetButton.addEventListener('click', init);
