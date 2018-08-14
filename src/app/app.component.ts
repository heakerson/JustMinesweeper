import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { StatsService } from './Services/stats.service';
import { GameStateManager } from './Services/game-state.service';
import { GameStatus } from './board/GameStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  ChildComponent : BoardComponent;

  constructor(public Stats : StatsService, private gameStateManager : GameStateManager){}

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
        //this.ChildComponent.Model.TogglePause();
      if(this.gameStateManager.GameStatus == GameStatus.Started){
        this.gameStateManager.SetState(GameStatus.Paused);
      }
      else if(this.gameStateManager.GameStatus == GameStatus.Paused){
          this.gameStateManager.SetState(GameStatus.Started);
      }  
    }
  }

}
