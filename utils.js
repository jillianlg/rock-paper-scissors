export function getRandomThrow() {
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
}