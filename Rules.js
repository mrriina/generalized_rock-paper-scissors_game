class Rules {
    constructor(moves) {
        this.moves = moves;
    }

    sortArray(computerMove) {
        let sortedmoves = [...this.moves];

        this.movesMiddleIndex = (sortedmoves.length - 1) / 2;
        while (computerMove !== sortedmoves[this.movesMiddleIndex]) {
          let element = sortedmoves.pop();
          sortedmoves.unshift(element);
        }
        this.sortedmoves = sortedmoves;
    }


    getWinner(userMove) {
        let userMoveIndex = this.sortedmoves.indexOf(userMove);
    
        if (this.movesMiddleIndex === userMoveIndex) {
            console.log("Draw");
        } else if (this.movesMiddleIndex < userMoveIndex) {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
}

module.exports = Rules;