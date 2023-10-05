const Rules = require("./Rules");

class HelpTable {
    constructor() {}

    getTable(moves) {
        const table = [];
    
        moves.forEach((element) => {
          const row = [];
          const rules = new Rules(moves);
          rules.sortArray(element);
    
          moves.forEach((el) => {
            row.push(rules.getWinner(el));
          });
    
          table.push(row);
        });
    
        this.displayRulesTable(table);
      }

    displayRulesTable(table) {
        const maxLengths = table[0].map((_, i) => Math.max(...table.map(row => row[i].length)));
        const separator = maxLengths.map(length => '-'.repeat(length)).join('-+-');

        console.log(separator);
        console.log(table.map(row => row.map((cell, i) => cell.padEnd(maxLengths[i])).join(' | ')).join('\n'));
        console.log(separator);
    }
}

module.exports = HelpTable;