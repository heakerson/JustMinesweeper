import { Injectable } from '@angular/core';
import { CellModel } from '../../Components/cell/CellModel';
import { GameStateManager } from '../Game State Service/game-state.service';
import { GameStatus } from '../Game State Service/GameStatus';
import { GridService } from '../Grid Service/grid.service';
import { CounterService } from '../Counter Service/counter.service';
import { StatsService } from '../Stats Service/stats.service';
import { SmileyService } from '../Smiley Service/smiley.service';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  constructor(private gameStateManager : GameStateManager, private counterService : CounterService, private gridService : GridService, private statsService : StatsService, private smileyService : SmileyService) { }

  public ClickCell(model : CellModel){

    if(this.IsClickable(model)){

      model.IsSelected = true;
        
        if(this.gameStateManager.GameStatus == GameStatus.Reset){

          this.statsService.IncrementAttempted();

          this.gridService.GenerateMines(model.Row, model.Column);
          this.gameStateManager.SetState(GameStatus.Started);
        }

        model.Count = this.GetAdjacentMineCount(model);

        if(model.IsMine){
          this.gameStateManager.SetState(GameStatus.Lose);
        }
        else{
            if(model.Count == 0){
                for(let cell of model.AdjacentCells){
                    if(!cell.IsMine && !cell.IsSelected){
                        this.ClickCell(cell);
                    }
                }
            }
        }
    }
  }

  public RightClickCell(model : CellModel){

    if(this.IsRightClickable(model)){

      model.IsFlagged = !model.IsFlagged;

      if(this.gameStateManager.GameStatus == GameStatus.Reset){
        this.gridService.GenerateMines(model.Row, model.Column);
        this.gameStateManager.SetState(GameStatus.Started);
      }

      this.counterService.UpdateLocatedMines(model);

    }

  }

  public IsClickable(model : CellModel) : boolean{
    return !model.IsSelected && 
            !model.IsFlagged &&
            (this.gameStateManager.GameStatus == GameStatus.Reset || 
              this.gameStateManager.GameStatus == GameStatus.Started ||
              this.gameStateManager.GameStatus == GameStatus.Warning)
  }

  public IsRightClickable(model : CellModel) : boolean{
    return !model.IsSelected && 
            (this.gameStateManager.GameStatus == GameStatus.Reset || 
              this.gameStateManager.GameStatus == GameStatus.Started ||
              this.gameStateManager.GameStatus == GameStatus.Warning)
  }

  public MouseDown(model : CellModel){
    if(this.IsClickable(model) || this.IsRightClickable(model)){
      this.smileyService.MouseDown();
    }
  }

  public MouseUp(model : CellModel){
    if(this.IsClickable(model)){
      this.smileyService.MouseUp();
    }
  }

  public GetAdjacentCells(model : CellModel) : CellModel[]{
    model.AdjacentCells = [];

    for(let location of model.AdjancentCellLocations){
        let cell : CellModel = this.gridService.GetCell(location[0], location[1]);
        model.AdjacentCells.push(cell);
    }

    return model.AdjacentCells;
}

public GetAdjacentMineCount(model : CellModel) : number{

    let count : number = 0;
    let adjCells : CellModel[] = this.GetAdjacentCells(model);
    
    for(let cell of adjCells){
        if(cell.IsMine){
            count++;
        }
    }

    return count;
  }

  public RevealMineStatus(model : CellModel){
    if(model.IsMine && !model.IsSelected){
      model.IsRevealed = true;
    }
    else if(!model.IsMine && model.IsFlagged){
      model.IsRevealed = true;
    }
  }

  public Pause(model : CellModel){
    model.IsPaused = !model.IsPaused;
  }

  public Reset(model : CellModel){
    model.IsSelected = false;
    model.IsMine = false;
    model.IsFlagged = false;
    model.Count = 0;
    model.IsRevealed = false;
    model.Won = false;
  }

  public Win(model : CellModel){
    model.Won = true;
  }
}
