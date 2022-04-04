// Import the coinFlip function from your coin.mjs file

import { coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT
const input = minimist(process.argv.slice(2));

input['number']; 
var flips = []; // initialize flips array

if(input != null) { // if input is number
    flips = coinFlips(number);
    
    console.log(flips);
    console.log(countFlips(flips));
} else { // if no input
    flips = coinFlips(1); // set to 1 if no input

    console.log(flips);
    console.log(countFlips(flips));
}
