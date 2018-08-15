import { Injectable } from '@angular/core';
import { GameStatus } from './GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { Difficulty, DifficultyType } from './DifficultyType';
import { CellModel } from '../cell/CellModel';

@Injectable({
  providedIn: 'root'
})
export class GameStateManager implements IUpdateable {

  public GameStatus : GameStatus = GameStatus.Reset;
  public Difficulty : Difficulty = new Difficulty(DifficultyType.Easy);
  public MouseDown : boolean = false;
  public FlaggedCells : CellModel[] = [];
  public MinesLocated : number = 0;
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
    }
  }

  public RegisterUpdateable(updateable : IUpdateable){
    this.updateables.push(updateable);
    this.SetState(GameStatus.Reset);
  }

  Reset():void {
    this.FlaggedCells = [];
    this.GameStatus = GameStatus.Reset;
    this.MinesLocated = 0;
    this.StatsLogged = false;
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

  public GetFlaggedCount() : number{
    let count : number = 0;
    for(let flag of this.FlaggedCells){
        if(flag.IsFlagged){
            count++;
        }
    }
    return count;
  }

}
