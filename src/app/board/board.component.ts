import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType, Difficulty } from '../Services/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from '../Services/GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GridService } from '../Services/grid.service';
import { StatsService } from '../Services/stats.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private route : ActivatedRoute, 
    public gameStateManager : GameStateManager,
    private gridService : GridService,
    private statsService : StatsService
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let difficulty : DifficultyType = <DifficultyType>params.get('difficulty');
      this.gameStateManager.Difficulty = new Difficulty(difficulty);
      this.gridService.InitCells();
    });

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    }, false);

  }

  public TogglePause(){
    if(this.gameStateManager.GameStatus == GameStatus.Started){
        this.gameStateManager.SetState(GameStatus.Paused);
    }
    else if(this.gameStateManager.GameStatus == GameStatus.Paused){
        this.gameStateManager.SetState(GameStatus.Started);
    }   
  }

  NewGame(){

    if(!this.gameStateManager.StatsLogged){
      this.gameStateManager.SetState(GameStatus.Stopped);
      this.statsService.Update(false);
    }

    this.gameStateManager.SetState(GameStatus.Reset);
  }
}
