import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  Difficulty : Difficulty = Difficulty.Easy;

  constructor() { }

  ngOnInit() {
  }

  UpdateDifficulty(difficulty : Difficulty){
    this.Difficulty = difficulty;
  }
}


export enum Difficulty {
  Easy = "Easy",
  Intermediate = "Intermediate",
  Expert = "Expert"
}
