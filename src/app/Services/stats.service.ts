import { Injectable } from '@angular/core';
import { TimerModel } from '../timer/TimerModel';
import { StatKeeper } from '../stats/StatKeeper';
import { BoardModel } from '../board/BoardModel';
import { DifficultyType } from '../new-game/DifficultyType';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public Beginner : StatKeeper = new StatKeeper(DifficultyType.Easy);
  public Intermediate : StatKeeper = new StatKeeper(DifficultyType.Intermediate);
  public Expert : StatKeeper = new StatKeeper(DifficultyType.Expert);

  public Update(board : BoardModel, timer : TimerModel, win : boolean){
    switch(board.Difficulty.Type){
        case DifficultyType.Easy:
            this.Beginner.UpdateStats(timer, win);
            board.StatsLogged = true;
            break;
        case DifficultyType.Intermediate:
            this.Intermediate.UpdateStats(timer, win);
            board.StatsLogged = true;
            break;
        case DifficultyType.Expert:
            this.Expert.UpdateStats(timer, win);
            board.StatsLogged = true;
            break;
    }
  }
}
