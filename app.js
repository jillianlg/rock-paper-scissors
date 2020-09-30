// import functions and grab DOM elements
// import {randomNumber } from './utils.js';

const checkedRadio = document.querySelector(':checked');
const button = document.querySelector('#play-button');
const resultsSpan = document.querySelector('#result-message');
const winSpan = document.querySelector('#win-tracker');
const loseSpan = document.querySelector('#loss-tracker');
const drawSpan = document.querySelector('#draw-tracker');

console.log(checkedRadio, button, resultsSpan, winSpan, loseSpan, drawSpan);
// initialize state

// set event listeners to update state and DOM