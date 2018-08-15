import { Component, OnInit, Input } from '@angular/core';
// import { CounterModel } from './CounterModel';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../Services/GameStatus';
import { GameStateManager } from '../Services/game-state.service';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, IUpdateable {

  constructor(private gameStateManager : GameStateManager, private counterService : CounterService) { }

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
}
