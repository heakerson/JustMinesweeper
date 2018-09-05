import { Component, OnInit } from '@angular/core';
import { DifficultyType } from '../../Services/Game State Service/DifficultyType';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  public Difficulty : DifficultyType = DifficultyType.Easy;
  public Easy : DifficultyType = DifficultyType.Easy;
  public Intermediate : DifficultyType = DifficultyType.Intermediate;
  public Expert : DifficultyType = DifficultyType.Expert;

  constructor() { }

  ngOnInit() {
  }

  UpdateDifficulty(difficulty : DifficultyType){
    this.Difficulty = difficulty;
  }
}
