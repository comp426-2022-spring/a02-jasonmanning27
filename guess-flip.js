// Import the coinFlip function from your coin.mjs file

import { coinFlip, flipACoin, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT


// need a checker for no input and invalid inputs


const args = minimist(process.argv.slice(2));
const call = args.guess || "backup";


if(call == "backup") { // check if no input
    console.error("Error: no input.\n Usage: node guess-flip --call=[heads|tails]");
}  else if ((call != "heads") && (call != "tails")) { // check if input is valid
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
    const hold = coinFlip();
    let winLose = "lose";

    if(hold == call) { // check if guess = flip result
        winLose = "win";
    }
    let results = {
        call: call, 
        flip: hold, 
        results: winLose
    };
    console.log(results);
}