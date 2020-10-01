// IMPORT MODULES under test here:
import { getRandomThrow, whoWon } from '../utils.js';

const test = QUnit.test;

test('getRandomThrow should randomly throw rock, papar or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});

//use for test
// expect.equal(typeof actual, 'string');

//Add test for whoWon function

test('whoWon should return trues paper beats rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whoWon('rock', 'paper');
    const expected = 'lose';

    const actual2 = whoWon('rock', 'scissors');
    const expected2 = 'win';

    const actual3 = whoWon('rock', 'rock');
    const expected3 = 'draw';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, actual2, expected2, actual3, expected3);

});