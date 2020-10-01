


export function getRandomThrow() {
    const getRandomThrow = Math.ceil(Math.random() * 3);
  
    let computerThrow;
  // if getRandomThrow is 1, it's rock
    if (getRandomThrow === 1){
        computerThrow = 'rock';
    }
    // if getRandomThrow is 2, it's paper
    else if (getRandomThrow === 2){
        computerThrow = 'paper';
    }
    // if getRandomThrow is 3, it's sissors
    else if (getRandomThrow === 3){
        computerThrow = 'scissors';
    }
    return computerThrow;
}

export function whoWon(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'draw';
    }
    if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'win';
    }
    if (userThrow === 'paper' && computerThrow === 'scissors') {
        return 'lose';
    }
    if (userThrow === 'scissors' && computerThrow === 'rock') {
        return 'lose';
    }
    if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 'win';
    }
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 'lose';
    }
    if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'lose';
    }
}