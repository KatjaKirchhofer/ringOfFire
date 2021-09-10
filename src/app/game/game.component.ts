import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog, public firestore: AngularFirestore) { }

  ngOnInit(): void { //was bedeutet void
    this.newGame(); //um die Funktion aufzurufen
  }

  newGame() {
    this.game = new Game();//damit wird der Variable ein Object zugewiesen
    console.log(this.game)
  }

  takeCard() {//onclick auf den Stapel
    if (!this.pickCardAnimation) {


      this.pickCardAnimation = true;
      this.currentCard = this.game.stack.pop();//löscht die letzte Karte aus dem Array

      console.log(this.game.playedCards)

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard)
        this.pickCardAnimation = false;
      }, 1000);
    }

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => { //name ist die VAriable ist der Name der eingegeben wurde
      if(name && name.length > 0) {
      this.game.players.push(name) //pusht den eingegeben Namen in das Array players
      console.log(this.game.players)
      }
    });
  }


}
