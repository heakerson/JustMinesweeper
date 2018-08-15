import { Component, OnInit, Input } from '@angular/core';
import { StatKeeper } from './StatKeeper';
//import { StatsModel } from './StatsModel';
import { StatsService } from '../Services/stats.service';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../board/GameStatus';
import { GameStateManager } from '../Services/game-state.service';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, IUpdateable { 

  // @Input() Model;

  constructor(private Stats : StatsService, private gameStateManager : GameStateManager, private timerService : TimerService) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    // if(!this.gameStateManager.StatsLogged){
    //   this.Stats.Update(false);
    // }
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {
    //this.Stats.Update(true);
  };
  Lose():void {
    //this.Stats.Update(false);
  };  

}
