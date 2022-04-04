
const suits = ["diamond", "spade", "heart", "club"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}


class Deck{
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
        this.deck = [];
    }

    createDeck(){
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                let card = { suit: this.suit[i], value: this.value[j], rank: this.rank[j] };
                this.deck.push(card);
            }
        }
        return this.deck; //complete deck of 52 cards
    }
//shuffle deck by looping and switching cards
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--){   //(start; step; stop); i>0 don't need to swap last card
            const newIndex = Math.floor(Math.random() * (i+1));
            //Floor returns the greatest integer less than or equal to its numeric argument.
            //random returns number between 0 and 1.
            const oldValue = this.deck[newIndex];   //flip values
            this.deck[newIndex] = this.deck[i];     //i index become newIndex
            this.deck[i] = oldValue;
        }
    }

    deal(){ //split deck
        const middleOfDeck = (this.deck.length / 2);
        player1Hand = (this.deck.slice(0, middleOfDeck));
        player2Hand = (this.deck.slice(middleOfDeck, this.deck.length));
    }
    checkDeck(){
        console.log(`This deck has ${this.deck.length} cards.`)

    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    currentHand(cards){
        this.hand = cards;
    }
    describe(){
        console.log(`${this.name} has ${this.hand.length} cards in hand.`)
    }
}

function playGame(player1, player2){
    for(let i = 0; i < player1Hand.length; i++){
        if(player1.hand[i].rank > player2Hand[i].rank){
            console.log(`${player1.name} gets a point!`);
            player1.score++;
        } else if(player1.hand[i].rank < player2Hand[i].rank){
            console.log(`${player2.name} gets a point!`);
            player2.score++
        } else {
            console.log(`${player1.name} and ${player2.name} played to a tie.`)
        }
    }
}

let player1Hand = [];
let player2Hand = [];

let gameDeck = new Deck(suits, values, rank);
gameDeck.createDeck();
gameDeck.shuffle();
gameDeck.deal();
gameDeck.checkDeck();

let player1 = new Player("Mark");
let player2 = new Player("Dan");
player1.currentHand(player1Hand);
player2.currentHand(player2Hand);

player1.describe();
player2.describe();


playGame(player1, player2);
console.log(`${player1.name} has ${player1.score}!`)
console.log(`${player2.name} has ${player2.score}!`)

