import { Injectable } from '@angular/core';
import { StatKeeper } from './StatKeeper';
import { DifficultyType } from './DifficultyType';
import { GameStateManager } from './game-state.service';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public Beginner : StatKeeper = new StatKeeper(DifficultyType.Easy, this.timerService);
  public Intermediate : StatKeeper = new StatKeeper(DifficultyType.Intermediate, this.timerService);
  public Expert : StatKeeper = new StatKeeper(DifficultyType.Expert, this.timerService);

  constructor(private gameStateManager : GameStateManager, private timerService : TimerService){}

  public Update(win : boolean){
    switch(this.gameStateManager.Difficulty.Type){
        case DifficultyType.Easy:
            this.Beginner.UpdateStats(win);
            this.gameStateManager.StatsLogged = true;
            break;
        case DifficultyType.Intermediate:
            this.Intermediate.UpdateStats(win);
            this.gameStateManager.StatsLogged = true;
            break;
        case DifficultyType.Expert:
            this.Expert.UpdateStats(win);
            this.gameStateManager.StatsLogged = true;
            break;
    }
  }

  public IncrementAttempted(){
    switch(this.gameStateManager.Difficulty.Type){
      case DifficultyType.Easy:
          this.Beginner.IncrementAttempted();
          break;
      case DifficultyType.Intermediate:
          this.Intermediate.IncrementAttempted();
          break;
      case DifficultyType.Expert:
          this.Expert.IncrementAttempted();
          break;
  }
  }
}
