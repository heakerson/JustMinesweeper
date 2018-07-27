import { Component, OnInit } from '@angular/core';
import { DifficultyType } from './DifficultyType';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  public Difficulty : DifficultyType = DifficultyType.Easy;
  //public List : number[] = [1,2,3,4]

  constructor() { }

  ngOnInit() {
  }

  UpdateDifficulty(difficulty : DifficultyType){
    this.Difficulty = difficulty;
    console.log(this.Difficulty);
  }
}
