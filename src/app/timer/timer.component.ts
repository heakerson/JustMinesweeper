import { Component, OnInit, Input } from '@angular/core';
import { GameStateManager } from '../Services/game-state.service';
import { IUpdateable } from '../Interfaces/IUpdateable';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, IUpdateable {

  public Time : number = 0;
  private Started : boolean = false;

  constructor(public gameStateManager : GameStateManager) { }

  ngOnInit() {

    setInterval(() => { 
      if(this.Started){
          this.Time++; 
      }
    }, 1000);

    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    this.Stop();
    this.Time = 0;
  };
  Start():void {
    this.Started = true;
  };
  Stop():void {
    this.Started = false;
  };
  Pause():void {
    this.Stop();
  };
  Win():void {
    this.Stop();
  };
  Lose():void {
    this.Stop();
  };  

}
