import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType, Difficulty } from '../new-game/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { BoardModel } from './BoardModel';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from './GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GridService } from '../grid/grid.service';
import { StatsService } from '../Services/stats.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, IUpdateable {

  Model : BoardModel;

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
      this.Model = new BoardModel(this.gameStateManager, this.gridService);
    });

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    }, false);

    this.gameStateManager.RegisterUpdateable(this);
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

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

}
