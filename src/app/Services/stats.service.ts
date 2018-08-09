import { Injectable } from '@angular/core';
// import { TimerModel } from '../timer/TimerModel';
import { StatKeeper } from '../stats/StatKeeper';
import { BoardModel } from '../board/BoardModel';
import { DifficultyType } from '../new-game/DifficultyType';
import { TimerService } from '../timer/timer.service';
import { GameStateManager } from './game-state.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public Beginner : StatKeeper = new StatKeeper(DifficultyType.Easy);
  public Intermediate : StatKeeper = new StatKeeper(DifficultyType.Intermediate);
  public Expert : StatKeeper = new StatKeeper(DifficultyType.Expert);

  constructor(private gameStateManager : GameStateManager){}

  public Update(board : BoardModel, timerService : TimerService, win : boolean){
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
