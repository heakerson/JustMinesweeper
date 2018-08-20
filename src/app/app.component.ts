import { Component } from '@angular/core';
import { BoardComponent } from './Components/board/board.component';
import { StatsService } from './Services/Stats Service/stats.service';
import { GameStateManager } from './Services/Game State Service/game-state.service';
import { GameStatus } from './Services/Game State Service/GameStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  ChildComponent : BoardComponent;

  constructor(private Stats : StatsService, private gameStateManager : GameStateManager){}

  onActivate(comp){
      this.ChildComponent = <BoardComponent>comp;
  }

  ClearStats(){
    this.Stats.Beginner.ClearStats();
    this.Stats.Intermediate.ClearStats();
    this.Stats.Expert.ClearStats();
  }

  TogglePause(){
    if(this.ChildComponent instanceof BoardComponent){
      if(this.gameStateManager.GameStatus == GameStatus.Started){
        this.gameStateManager.SetState(GameStatus.Paused);
      }
      else if(this.gameStateManager.GameStatus == GameStatus.Paused){
          this.gameStateManager.SetState(GameStatus.Started);
      }
    }
  }

}
