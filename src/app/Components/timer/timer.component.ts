import { Component, OnInit, Input } from '@angular/core';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { TimerService } from '../../Services/Timer Service/timer.service';
import { StatsService } from '../../Services/Stats Service/stats.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, IUpdateable {

  constructor(public gameStateManager : GameStateManager, public timerService : TimerService, private statsService : StatsService) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    this.timerService.Reset();
  };
  Start():void {
    this.timerService.Start();
  };
  Stop():void {
    this.timerService.Stop();
  };
  Pause():void {
    this.Stop();
  };
  Win():void {
    this.Stop();
    this.statsService.Update(true);
  };
  Lose():void {
    this.Stop();
    this.statsService.Update(false);
  };
  Warning():void {}

}
