import { Component, OnInit, Input } from '@angular/core';
// import { CounterModel } from './CounterModel';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../board/GameStatus';
import { GameStateManager } from '../Services/game-state.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, IUpdateable {

  constructor(public gameStateManager : GameStateManager, private counterService : CounterService) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  
}
