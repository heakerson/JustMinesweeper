import { Injectable } from '@angular/core';
import { CellModel } from '../cell/CellModel';
import { CellService } from '../cell/cell.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public CellArray : CellModel[][];

  constructor(private cellService : CellService) { }

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
}
