import { Component, OnInit, Input } from '@angular/core';
import { StatKeeper } from './StatKeeper';
//import { StatsModel } from './StatsModel';
import { StatsService } from '../Services/stats.service';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../board/GameStatus';
import { GameStateService } from '../Services/game-state.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, IUpdateable { 

  // @Input() Model;

  constructor(public Stats : StatsService, public gameStateService : GameStateService) { }

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
