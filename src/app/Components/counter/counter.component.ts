import { Component, OnInit, Input } from '@angular/core';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { CounterService } from '../../Services/Counter Service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, IUpdateable {

  constructor(public gameStateManager : GameStateManager, public counterService : CounterService) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    this.counterService.Reset(this.gameStateManager.Difficulty.MineCount);
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  
  Warning():void {}
}
