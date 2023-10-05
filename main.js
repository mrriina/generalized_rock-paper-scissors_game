const moves = process.argv.slice(2);
const Game = require("./game");

if(moves.length < 2) {
    console.log('It is necessary to perform at least 3 moves.');
    return;
} else if(moves.length % 2 == 0) {
    console.log("An odd number of moves must be entered.");
    return;
} else if(new Set(moves).size !== moves.length) {
    console.log("The moves entered must be unique.");
    return;
} else {
    const game = new Game(moves);
    game.main();
}

