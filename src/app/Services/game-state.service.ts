import { Injectable } from '@angular/core';
import { GameStatus } from '../board/GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  public GameStatus : GameStatus = GameStatus.Reset;
  private updateables : IUpdateable[] = [];

  // private handlers : { (gameState: GameStatus): void; } [] = [];

  constructor() {}

  public SetState(status : GameStatus){
    // this.handlers.forEach(handler => handler(status));
    this.updateables.forEach(updateable => this.InvokeStateChange(updateable, status));
  }

  private InvokeStateChange(updateable : IUpdateable, status : GameStatus){
    switch(status){
      case GameStatus.Reset:
        updateable.Reset();
        break;
      case GameStatus.Started:
        updateable.Start();
        break;
      case GameStatus.Stopped:
        updateable.Stop();
        break;
      case GameStatus.Paused:
        updateable.Pause();
        break;
      case GameStatus.Win:
        updateable.Win();
        break;
      case GameStatus.Lose:
        updateable.Lose();
        break;
    }
  }

  // public RegisterHandler(handler : {(gameState : GameStatus)} ){
  //   this.handlers.push(handler);
  // }

  public RegisterUpdateable(updateable : IUpdateable){
    this.updateables.push(updateable);
  }

}
