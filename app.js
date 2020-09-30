// import functions and grab DOM elements
// import {randomNumber } from './utils.js';

const checkedRadio = document.querySelector(':checked');
const button = document.querySelector('#play-button');
const resultsSpan = document.querySelector('#result-message');
const winSpan = document.querySelector('#win-tracker');
const lossesSpan = document.querySelector('#loss-tracker');
const drawSpan = document.querySelector('#draw-tracker');

// initialize state
let wins = 0;
let losses = 0;
let draw = 0;

// set event listeners to update state and DOM
button.addEventListener('clicked', () => {
    const getRandomThrow = Math.ceil(Math.random() * 3);
  
    let throwIs;
    // if getRandomThrow is 1, it's rock
    if (getRandomThrow === 1){
        throwIs = 'rock';
    }
    // if getRandomThrow is 2, it's paper
    else if (getRandomThrow === 2){
        throwIs = 'paper';
    }
    // if getRandomThrow is 3, it's sissors
    else if (getRandomThrow === 3){
        throwIs = 'scissors';
    }
    return throwIs;
});