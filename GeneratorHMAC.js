const secureRandom = require('secure-random');
const cryptojs = require("crypto-js")

class GeneratorHMAC {
    constructor(computerMove) {
        this.arr = secureRandom(32, {type: "Uint8Array"});
        this.key = Buffer.from(this.arr).toString('hex');
        this.hmac = cryptojs.HmacSHA256(computerMove, this.key).toString();
    }

    getHmac() {
        return this.hmac;
    }

    getKey() {
        return this.key;
    }
}

module.exports = GeneratorHMAC;