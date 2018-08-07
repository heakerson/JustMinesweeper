import { Component, OnInit, Input } from '@angular/core';
import { CounterModel } from './CounterModel';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../board/GameStatus';
import { GameStateService } from '../Services/game-state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, IUpdateable {

  @Input() Model : CounterModel;

  constructor(public gameStateService : GameStateService) { }

  ngOnInit() {
    this.gameStateService.RegisterUpdateable(this);
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  
}
