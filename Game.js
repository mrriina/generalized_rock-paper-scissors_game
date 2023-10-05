const prompt = require("prompt-sync")({ sigint: true });
const GeneratorHMAC = require("./GeneratorHMAC");
const Rules = require("./Rules");
const HelpTable = require("./HelpTable");

class Game {
    constructor(moves) {
        this.moves = moves;
    }

    main() {
        const computerMove = this.moves[Math.floor(Math.random() * this.moves.length)];
        const genHmac = new GeneratorHMAC(computerMove);
        const hmac = genHmac.getHmac();
        console.log('HMAC: ', hmac);

        const availableMoves = this.moves.map((move, index) => `${index + 1} - ${move}\n`)
                                    .join("");
        console.log('Available moves:\n'+
                    availableMoves +
                    '0 - exit\n' +
                    '? - help');
        
        let userMoveNumber  = this.userInput(availableMoves);

        if(userMoveNumber == 0) {
            process.exit(0);
        } else if (userMoveNumber == "?") {
            new HelpTable().getTable(this.moves);
        } else {
            let userMove = this.moves[userMoveNumber - 1];
            console.log('Your move: ', userMove);
            console.log('Computer move: ', computerMove);

            const rules = new Rules(this.moves);
            rules.sortArray(computerMove);
            let winnerStatus = rules.getWinner(userMove);
            rules.printWinner(winnerStatus);

            console.log('HMAC key: ', genHmac.getKey());
        }
    }

    userInput(availableMoves) {
        let userMove = prompt(`Enter your move: `);
        let numberedUserMove = Number(userMove);

        if (userMove != "?" && (numberedUserMove < 0 || numberedUserMove > this.moves.length || isNaN(numberedUserMove))) {
            console.log('Available moves:\n'+
                    availableMoves +
                    '0 - exit\n' +
                    '? - help');
            return this.userInput(availableMoves);
        }
        return userMove;
    }
}

module.exports = Game;