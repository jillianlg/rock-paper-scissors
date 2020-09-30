// import functions and grab DOM elements
import { getRandomThrow } from './utils.js';

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
button.addEventListener('click', () => {
    const gameThrow = getRandomThrow();
  
    
});


