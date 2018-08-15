import { Component, OnInit, Input } from '@angular/core';
import { StatKeeper } from '../Services/StatKeeper';
//import { StatsModel } from './StatsModel';
import { StatsService } from '../Services/stats.service';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStatus } from '../Services/GameStatus';
import { GameStateManager } from '../Services/game-state.service';
import { TimerService } from '../Services/timer.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit { 

  constructor(private Stats : StatsService) { }

  ngOnInit() {}

}
