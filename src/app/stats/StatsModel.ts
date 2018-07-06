import { StatKeeper } from "./StatKeeper";
import { Difficulty, DifficultyType } from "../new-game/DifficultyType";
import { SimpleChange } from "@angular/core";
import { TimerModel } from "../timer/TimerModel";
import { BoardModel } from "../board/BoardModel";

export class StatsModel{

  public Beginner : StatKeeper = new StatKeeper();
  public Intermediate : StatKeeper = new StatKeeper();
  public Expert : StatKeeper = new StatKeeper();

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