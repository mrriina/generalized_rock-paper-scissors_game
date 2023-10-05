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
            return "Draw";
        } else if (this.movesMiddleIndex < userMoveIndex) {
            return "Win";
        } else {
            return "Lose";
        }
    }

    printWinner(status) {
        switch (status) {
            case "Draw":
                console.log("Draw");
                break;
            
            case "Win":
                console.log("You win!");
                break;
        
            case "Lose":
                console.log("You lose!");
                break;
        }
    }
}

module.exports = Rules;