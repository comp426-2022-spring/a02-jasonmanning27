// Import the coinFlip function from your coin.mjs file

import { coinFlip, flipACoin, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT


// need a checker for no input and invalid inputs


const args = minimist(process.argv.slice(2));
const guess = args.guess || "backup";

if(guess == "backup") {
    console.error("no input");
}  else if ((guess != "heads") && (guess != "tails")) {
    console.log("invalid input");
} else {
    const hold = coinFlip();
    let winlose = "lose";
    if(hold == guess) {
        winlose = "win";
    }
    let results = {
        call: guess, flip: hold, result: winlose
    };
    console.log(results);
}