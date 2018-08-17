import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType, Difficulty } from '../../Services/Game State Service/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { GameStatus } from '../../Services/Game State Service/GameStatus';
import { GridService } from '../../Services/Grid Service/grid.service';
import { StatsService } from '../../Services/Stats Service/stats.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private PreviousGameState : GameStatus = GameStatus.Reset;

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
    if(this.gameStateManager.GameStatus == GameStatus.Started || this.gameStateManager.GameStatus == GameStatus.Warning){
        this.PreviousGameState = this.gameStateManager.GameStatus;
        this.gameStateManager.SetState(GameStatus.Paused);
    }
    else if(this.gameStateManager.GameStatus == GameStatus.Paused){
        this.gameStateManager.SetState(this.PreviousGameState);
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
