const Rules = require("./Rules");

class HelpTable {
    constructor() {}

    getTable(moves) {
        const table = [];
        const rules = new Rules(moves);
        
        const firstRow = [];
        firstRow.push('v PC\User >');
        moves.forEach((element) => {
            rules.sortArray(element);
            firstRow.push(element);
        });
        table.push(firstRow);
    
        moves.forEach((element) => {
          const row = [];
          rules.sortArray(element);
          row.push(element);
          
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
        console.log(table[0].map((cell, i) => cell.padEnd(maxLengths[i])).join(' | '));
        console.log(separator);

        for (let i = 1; i < table.length; i++) {
            console.log(table[i].map((cell, i) => cell.padEnd(maxLengths[i])).join(' | '));
        }
        console.log(separator);
    }
}

module.exports = HelpTable;