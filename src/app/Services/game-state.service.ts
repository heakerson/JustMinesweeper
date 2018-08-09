import { Injectable } from '@angular/core';
import { GameStatus } from '../board/GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { Difficulty, DifficultyType } from '../new-game/DifficultyType';
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
  public StatsLogged : boolean = false;

  // private handlers : { (gameState: GameStatus): void; } [] = [];

  constructor() {}

  ngOnInit(): void {
    this.RegisterUpdateable(this);
  }

  public SetState(status : GameStatus){
    // this.handlers.forEach(handler => handler(status));
    this.updateables.forEach(updateable => this.InvokeStateChange(updateable, status));
  }

  public NewGame(difficultyType : DifficultyType){
    this.Difficulty = new Difficulty(difficultyType);
    this.SetState(GameStatus.Reset);
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

  Reset():void {
    this.FlaggedCells = [];
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
