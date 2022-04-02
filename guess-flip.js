// Import the coinFlip function from your coin.mjs file

import { coinFlip, flipACoin, countFlips } from "./modules/coin.mjs";

// Call the coinFlip function and put the return into STDOUT

const call = myArgs["call"];

if(call == "heads" || call == "tails") {
    console.log(flipACoin(call))
} else {
    console.log("error");
}