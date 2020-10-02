// import functions and grab DOM elements
import { getRandomThrow, whoWon } from './utils.js';

const button = document.querySelector('#play-button');
const resultsSpan = document.querySelector('#result-message');
const winSpan = document.querySelector('#win-tracker');
const lossesSpan = document.querySelector('#loss-tracker');
const drawSpan = document.querySelector('#draw-tracker');
// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const computerThrow = getRandomThrow();
    const checkedRadio = document.querySelector(':checked');
    const userThrow = checkedRadio.value;

    const throwResults = whoWon(userThrow, computerThrow);
    if (throwResults === 'win') {
        wins++;

        winSpan.textContent = wins;
        resultsSpan.textContent = 'You Lost. Try again!';
    }
    if (throwResults === 'lose') {
        losses++;

        lossesSpan.textContent = losses;
        resultsSpan.textContent = 'You Lost. Try again!';
    }
    if (throwResults === 'draw') {
        draws++;

        drawSpan.textContent = draws;
        resultsSpan.textContent = 'It\'s a draw. Try again!';
    }
});

function clear()
{
    document.getElementById("myForm").reset();
}