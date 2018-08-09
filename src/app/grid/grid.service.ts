import { Injectable } from '@angular/core';
import { CellModel } from '../cell/CellModel';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public CellArray : CellModel[][];

  constructor() { }

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
