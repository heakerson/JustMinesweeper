import { Injectable } from '@angular/core';
import { GameStatus } from './GameStatus';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { Difficulty, DifficultyType } from './DifficultyType';

@Injectable({
  providedIn: 'root'
})
export class GameStateManager implements IUpdateable {

  public GameStatus : GameStatus = GameStatus.Reset;
  public Difficulty : Difficulty = new Difficulty(DifficultyType.Easy);
  private updateables : IUpdateable[] = [];
  public StatsLogged : boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.RegisterUpdateable(this);
  }
  
  public NewGame(difficultyType : DifficultyType){
    this.Difficulty = new Difficulty(difficultyType);
    this.SetState(GameStatus.Reset);
  }

  public SetState(status : GameStatus){
    this.GameStatus = status;
    this.InvokeStateChange(this, status);
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
      case GameStatus.Warning:
        updateable.Warning();
        break;
    }
  }

  public RegisterUpdateable(updateable : IUpdateable){
    this.updateables.push(updateable);
    this.SetState(GameStatus.Reset);
  }

  Reset():void {
    this.GameStatus = GameStatus.Reset;
    this.StatsLogged = false;
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};
  Warning():void {}

}
