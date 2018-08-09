import { Component, OnInit, Input } from '@angular/core';
// import { TimerModel } from './TimerModel';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from '../board/GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, IUpdateable {

  // @Input() Model : TimerModel;

  constructor(public gameStateManager : GameStateManager, private timerService : TimerService) { }

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
    this.timerService.Stop();
  };
  Win():void {
    this.timerService.Stop();
  };
  Lose():void {
    this.timerService.Stop();
  };  

}
