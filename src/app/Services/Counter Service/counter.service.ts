import { Injectable } from '@angular/core';
import { CellModel } from '../../Components/cell/CellModel';
import { GameStateManager } from '../Game State Service/game-state.service';
import { GameStatus } from '../Game State Service/GameStatus';
import { GridService } from '../Grid Service/grid.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public Count : number = 0;
  public Flags : number = 0;

  constructor(private gameStateManager : GameStateManager, private gridService : GridService){}

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
              this.gridService.FlaggedCells.push(cell);
          }

          if(cell.IsMine){
              this.gridService.MinesLocated++;
          }

          this.Decrement();
          this.Flags--;
      }
      else{

          if(cell.IsMine){
              this.gridService.MinesLocated--;
          }

          this.Incrememnt();
          this.Flags++;
      }

      if(this.IsWinState()){
        this.gameStateManager.SetState(GameStatus.Win);
      }
      else if(this.IsWarningState()){
        this.gameStateManager.SetState(GameStatus.Warning);
      }
      else if(this.CanRemoveWarningState()){
        this.gameStateManager.SetState(GameStatus.Started);
      }
  }

  private IsWinState() : boolean{
    return this.gridService.MinesLocated == this.gameStateManager.Difficulty.MineCount && 
            this.gridService.GetFlaggedCount() == this.gameStateManager.Difficulty.MineCount;
  }

  private IsWarningState() : boolean{
    return this.gridService.GetFlaggedCount() >= this.gameStateManager.Difficulty.MineCount &&
            this.gameStateManager.GameStatus != GameStatus.Warning;
  }

  private CanRemoveWarningState() : boolean {
    return this.gridService.GetFlaggedCount() < this.gameStateManager.Difficulty.MineCount &&
        this.gameStateManager.GameStatus == GameStatus.Warning;
  }

  public IsInFlaggedList(cell : CellModel) : boolean{

      for(let aCell of this.gridService.FlaggedCells){
          if(aCell.Id == cell.Id){
              return true;
          }
      }

      return false;
  }
}
