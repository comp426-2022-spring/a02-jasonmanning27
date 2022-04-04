// Import the coinFlip function from your coin.mjs file

import { coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT
const input = minimist(process.input.slice(2));
const number = input.number || 1;

let flips = coinflips(number);
let sum = countFlips(flips);

console.log(flips);
console.log(sum);

