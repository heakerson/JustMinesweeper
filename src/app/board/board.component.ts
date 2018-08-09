import { Component, OnInit, Input } from '@angular/core';
import { DifficultyType } from '../new-game/DifficultyType';
import { ActivatedRoute } from '@angular/router';
import { BoardModel } from './BoardModel';
import { StatsService } from '../Services/stats.service';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from './GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { BoardService } from '../Services/board.service';
import { CounterService } from '../counter/counter.service';
import { TimerService } from '../timer/timer.service';
import { CellService } from '../cell/cell.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, IUpdateable {

  Model : BoardModel;

  constructor(
    private route : ActivatedRoute, 
    private Stats : StatsService, 
    public gameStateManager : GameStateManager,
    private boardService : BoardService,
    private counterService : CounterService,
    private timerService : TimerService,
    private cellService : CellService
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let difficulty : DifficultyType = <DifficultyType>params.get('difficulty');
      this.Model = new BoardModel(difficulty, this.Stats, this.gameStateManager, this.boardService, this.counterService, this.timerService, this.cellService);
    });

    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

}
