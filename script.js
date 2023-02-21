'use strict';

// selecting elements
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const player1CurrScore = document.getElementById('current--0');
const player2CurrScore = document.getElementById('current--1');
const player1Cont = document.querySelector('.player--0');
const player2Cont = document.querySelector('.player--1');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let player1Final = 0;
let player2Final = 0;

let p1CurrScore = 0;
let p2CurrScore = 0;
let currentPlay = 0;

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

const randomDice = () => Math.trunc(Math.random() * 6) + 1;

let randomNum = randomDice();
const displayDiceROll = () => {
  dice.setAttribute('src', `dice-${randomNum}.png`);
  dice.classList.remove('hidden');
};

rollBtn.addEventListener('click', function () {
  randomNum = randomDice();
  displayDiceROll();
  if (currentPlay === 0) {
    if (randomNum !== 1) {
      p1CurrScore += randomNum;
      player1CurrScore.textContent = p1CurrScore;
    } else {
      player1Cont.classList.remove('player--active');
      player2Cont.classList.add('player--active');
      p1CurrScore = 0;
      currentPlay = 1;
      player1CurrScore.textContent = p1CurrScore;
    }
  } else {
    if (randomNum !== 1) {
      p2CurrScore += randomNum;
      player2CurrScore.textContent = p2CurrScore;
    } else {
      player1Cont.classList.add('player--active');
      player2Cont.classList.remove('player--active');
      currentPlay = 0;
      p2CurrScore = 0;
      player2CurrScore.textContent = p2CurrScore;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (currentPlay === 0) {
    player1Final += p1CurrScore;
    score1.textContent = player1Final;
    player1Cont.classList.remove('player--active');
    player2Cont.classList.add('player--active');
    p1CurrScore = 0;
    currentPlay = 1;
    player1CurrScore.textContent = p1CurrScore;
    if (player1Final >= 100) {
      player1Cont.classList.add('player--winner');
      player1Cont.classList.remove('player--active');
    }
  } else {
    player2Final += p2CurrScore;
    score2.textContent = player2Final;
    player1Cont.classList.add('player--active');
    player2Cont.classList.remove('player--active');
    currentPlay = 0;
    p2CurrScore = 0;
    player2CurrScore.textContent = p2CurrScore;
    if (player2Final >= 100) {
      player2Cont.classList.add('player--winner');
      player2Cont.classList.remove('player--active');
    }
  }
});

newGameBtn.addEventListener('click', function () {
  player2Final = 0;
  score2.textContent = player2Final;
  player1Final = 0;
  score1.textContent = player1Final;
  currentPlay = 0;
  player2Cont.classList.remove('player--winner');
  player1Cont.classList.remove('player--winner');
  player1Cont.classList.add('player--active');
  player2Cont.classList.remove('player--active');
  p2CurrScore = 0;
  player2CurrScore.textContent = p2CurrScore;
  p1CurrScore = 0;
  player1CurrScore.textContent = p1CurrScore;
  dice.classList.add('hidden');
});
