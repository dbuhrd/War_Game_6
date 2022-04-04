// const { assert } = require("chai");
// const { expect } = require("chai");
// const { describe } = require("chai");

//const expect = chai.expect;

var expect = chai.expect;       // imports 

describe("MyFunctions", function() {
 

    describe('players', function () {
        it('assigns a name', function () {
            let player1 = new Player("Mark");
            expect(player1.name).to.equal('Mark');
        });
        it('assigns a hand', function () {
            let player1 = new Player("Mark");
            const cards = 'test';
            expect(Array.isArray(player1.hand)).to.be.true;
            player1.currentHand(cards);
            expect(player1.hand).equals('test');
        });
    });
});