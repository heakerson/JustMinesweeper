import { Injectable } from '@angular/core';
import { StatKeeper } from '../stats/StatKeeper';
import { DifficultyType } from '../new-game/DifficultyType';
import { GameStateManager } from './game-state.service';
import { TimerService } from '../timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public Beginner : StatKeeper = new StatKeeper(DifficultyType.Easy);
  public Intermediate : StatKeeper = new StatKeeper(DifficultyType.Intermediate);
  public Expert : StatKeeper = new StatKeeper(DifficultyType.Expert);

  constructor(private gameStateManager : GameStateManager){}

  public Update(timerService : TimerService, win : boolean){
    switch(this.gameStateManager.Difficulty.Type){
        case DifficultyType.Easy:
            this.Beginner.UpdateStats(timerService, win);
            this.gameStateManager.StatsLogged = true;
            break;
        case DifficultyType.Intermediate:
            this.Intermediate.UpdateStats(timerService, win);
            this.gameStateManager.StatsLogged = true;
            break;
        case DifficultyType.Expert:
            this.Expert.UpdateStats(timerService, win);
            this.gameStateManager.StatsLogged = true;
            break;
    }
  }
}
