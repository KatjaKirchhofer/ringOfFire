import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor() { }

  ngOnInit(): void { //was bedeutet void
    this.newGame(); //um die Funktion aufzurufen
  }

  newGame() {
    this.game = new Game();//damit wird der Variable ein Object zugewiesen
    console.log(this.game)
  }

  takeCard() {//onclick auf den Stapel
    if(!this.pickCardAnimation) {

   
    this.pickCardAnimation = true;
    this.currentCard = this.game.stack.pop();//löscht die letzte Karte aus dem Array
  
   console.log(this.game.playedCards)
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard)
        this.pickCardAnimation = false;
    }, 1000);
  }

  }


}
