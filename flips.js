// Import the coinFlip function from your coin.mjs file

import { coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT
const myArgs = minimist(process.argv.slice(2));
const number = args.number || 1; // need to make sure it has a value if no input

let flips = coinFlips(number);
let sum = countFlips(flips);

var array = coinFlips(myArgs['number']);

console.log(flips);
console.log(sum);
