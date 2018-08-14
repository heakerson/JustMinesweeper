import { Injectable } from '@angular/core';
import { CellModel } from '../cell/CellModel';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from '../board/GameStatus';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public Count : number = 0;
  public Flags : number = 0;

  constructor(private gameStateManager : GameStateManager){}

  public Reset(initCount : number){
      this.Count = initCount;
  }

  public Decrement(){
      this.Count -= 1;
  }

  public Incrememnt(){
      this.Count += 1;
  }

  public UpdateLocatedMines(cell : CellModel){

      if(cell.IsFlagged){

          if(!this.IsInFlaggedList(cell)){
              this.gameStateManager.FlaggedCells.push(cell);
          }

          if(cell.IsMine){
              this.gameStateManager.MinesLocated++;
          }

          this.Decrement();
          this.Flags--;
      }
      else{

          if(cell.IsMine){
              this.gameStateManager.MinesLocated--;
          }

          this.Incrememnt();
          this.Flags++;
      }

      if(this.gameStateManager.MinesLocated == this.gameStateManager.Difficulty.MineCount && this.gameStateManager.GetFlaggedCount() == this.gameStateManager.Difficulty.MineCount){
        console.log("WIN")
        this.gameStateManager.SetState(GameStatus.Win);
      }
  }

  public IsInFlaggedList(cell : CellModel) : boolean{

      for(let aCell of this.gameStateManager.FlaggedCells){
          if(aCell.Id == cell.Id){
              return true;
          }
      }

      return false;
  }
}
