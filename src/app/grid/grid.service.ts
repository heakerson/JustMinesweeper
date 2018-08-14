import { Injectable } from '@angular/core';
import { CellModel } from '../cell/CellModel';
import { CellService } from '../cell/cell.service';
import { GameStateManager } from '../Services/game-state.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public CellArray : CellModel[][];
  public MineCells : CellModel[];
  public MineCount : number = 0;

  constructor(private gameStateManager : GameStateManager) { }

//   public Pause(){    
//     for(let row of this.CellArray){
//         for(let cell of row){
//             this.cellService.Pause(cell);
//         }
//     }
// }

  // InitCells(rows : number, columns : number){

  //   this.CellArray = [];

  //   for(let i = 0; i < rows; i++){

  //       let row : CellModel[] = [];

  //       for(let j = 0; j < columns; j++){
  //           let cell : CellModel = new CellModel(this, i, j, this.gameStateManager, this.cellService);
  //           row.push(cell);
  //       }

  //       this.CellArray.push(row);
  //   }
  // }

  InitCells(rows : number, columns : number){

    this.CellArray = [];

    for(let i = 0; i < rows; i++){

        let row : CellModel[] = [];

        for(let j = 0; j < columns; j++){
            let cell : CellModel = new CellModel(i, j);
            row.push(cell);
        }

        this.CellArray.push(row);
    }
}

  public GenerateMines(avoidRow : number, avoidColumn : number){

    this.MineCount = this.gameStateManager.Difficulty.MineCount;
    let counter : number = 0;
    this.MineCells = [];
    
    while(counter < this.MineCount){

        let rowIndex : number = Math.floor((Math.random() * this.gameStateManager.Difficulty.Rows));
        let columnIndex : number = Math.floor((Math.random() * this.gameStateManager.Difficulty.Columns));

        if(this.IsValidMineLocation(rowIndex, columnIndex, avoidRow, avoidColumn)){
            let cell : CellModel = this.GetCell(rowIndex, columnIndex);
            cell.IsMine = true;
            counter++;
            this.MineCells.push(cell);
        }
    }
}

private IsValidMineLocation(rowIndex: number, columnIndex : number, avoidRow : number, avoidColumn : number) : boolean {
    
    if(rowIndex == avoidRow && columnIndex == avoidColumn){
        return false;
    }

    let cell : CellModel = this.GetCell(rowIndex, columnIndex);
    if(cell.IsMine){
        return false;
    }

    return true;
}

  // public RevealMines(){

  //   for(let cell of this.MineCells){
  //       this.cellService.RevealMineStatus(cell);
  //   }

  //   for(let cell of this.gameStateManager.FlaggedCells){
  //       if(!cell.IsMine){
  //           this.cellService.RevealMineStatus(cell);
  //       }
  //   }
  // }

  public GetCell(rowIndex: number, columnIndex : number) : CellModel{
    let row = this.CellArray[rowIndex];
    let cell : CellModel = row[columnIndex];
    return cell;
  }

  public IsValidCellLocation(rowIndex: number, columnIndex: number) : boolean{
        
    if(rowIndex < 0 || columnIndex < 0){
        return false;
    }
    else if(rowIndex > (this.gameStateManager.Difficulty.Rows-1)){
        return false;
    }
    else if(columnIndex > (this.gameStateManager.Difficulty.Rows-1)){
        return false;
    }

    return true;
}
}
