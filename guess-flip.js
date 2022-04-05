// Import the coinFlip function from your coin.mjs file

import { coinFlip, flipACoin, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT


// need a checker for no input and invalid inputs


const args = minimist(process.argv.slice(2));
const guess = args.guess || "backup";


if(guess == "backup") { // check if no input
    console.error("no input");
}  else if ((guess != "heads") && (guess != "tails")) { // check if input is valid
    console.log("invalid input");
} else {
    const hold = coinFlip();
    let winLose = "lose";

    if(hold == guess) { // check if guess = flip result
        winLose = "win";
    }
    let results = {
        call: guess, 
        flip: hold, 
        results: winLose
    };
    console.log(results);
}