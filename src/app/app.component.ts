import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { GameStatus } from './board/GameStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  ChildComponent : BoardComponent;

  onActivate(comp){
      this.ChildComponent = <BoardComponent>comp;
  }

  PauseGame(){
    if(this.ChildComponent instanceof BoardComponent){
      this.ChildComponent.Model.Stop();
    }
  }

  StartGame(){
    if(this.ChildComponent instanceof BoardComponent){
      if(this.ChildComponent.Model.GameStatus == GameStatus.Stopped){
        this.ChildComponent.Model.Start();
      }
    }
  }

}
