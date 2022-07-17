import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { AddPlayerComponent } from '../add-player/add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation= false;
  currentCard: string = '';
  game: Game;

 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }
  takeCard(){
    if(!this.pickCardAnimation){
    this.pickCardAnimation = true;
    this.currentCard = this.game.stack.pop();

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;

    }, 1000);
  }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerComponent, {
     
    });

    dialogRef.afterClosed().subscribe(name => {
      this.game.players.push(name);
     
    });
  }
}
 

 
