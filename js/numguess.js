const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attemps = 0;
let guess;

let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)) {
        alert('Please enter a valid number');
        continue;   
    }
    else if(guess === null) {
        alert('Goodbye');
        break;
    }   
    else if(guess < minNum || guess > maxNum) {
        alert('Please enter a number within the range');
        continue;
    }
    else if(guess < answer) {alert('Higher');}
    else if(guess > answer) {alert('Lower');}
    else {
        alert(`Correct! It took you ${attemps} attempts`);
        attemps = 0;
    }
    console.log(typeof guess, guess);
    // running = false;
    attemps++;
}