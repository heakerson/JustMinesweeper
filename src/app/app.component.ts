import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  ChildComponent : BoardComponent;

  constructor(public Stats : StatsService){}

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
      this.ChildComponent.Model.TogglePause();
    }
  }

}
