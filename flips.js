// Import the coinFlip function from your coin.mjs file

import { coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

// Call the coinFlip function and put the return into STDOUT
const myArgs = minimist(process.argv.slice(2));

var array = coinFlips(myArgs['number']);
console.log(array);
console.log(coinFlip());