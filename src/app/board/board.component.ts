import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType, Difficulty } from '../new-game/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { BoardModel } from './BoardModel';
import { StatsService } from '../Services/stats.service';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from './GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { CounterService } from '../counter/counter.service';
import { TimerService } from '../timer/timer.service';
import { CellService } from '../cell/cell.service';
import { GridService } from '../grid/grid.service';

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
    private timerService : TimerService,
    private cellService : CellService
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let difficulty : DifficultyType = <DifficultyType>params.get('difficulty');
      this.gameStateManager.Difficulty = new Difficulty(difficulty);
      this.Model = new BoardModel(this.gameStateManager, this.timerService, this.cellService);
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
    this.gameStateManager.SetState(GameStatus.Reset);
  }

  Reset():void {};

  Start():void {
    this.Model.Start();
  };
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

}
