import { Component, OnInit, Input } from '@angular/core';
import { CellModel } from './CellModel';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { CellService } from '../../Services/Cell Service/cell.service';
import { GridService } from '../../Services/Grid Service/grid.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit, IUpdateable {

  @Input() Model : CellModel;

  constructor(public gameStateManager : GameStateManager, private cellService : CellService, private gridService : GridService) { }

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
    this.InitAdjacentCellLocations();
  }

  private InitAdjacentCellLocations(){

    let InitAdjancentCellLocations : number[][] = [
        [this.Model.Row-1, this.Model.Column-1],
        [this.Model.Row-1, this.Model.Column],
        [this.Model.Row-1, this.Model.Column+1],
        [this.Model.Row, this.Model.Column-1],
        [this.Model.Row, this.Model.Column+1],
        [this.Model.Row+1, this.Model.Column-1],
        [this.Model.Row+1, this.Model.Column],
        [this.Model.Row+1, this.Model.Column+1],
    ]

    for(let location of InitAdjancentCellLocations){
        let row : number = location[0];
        let column : number = location[1];

        if(this.gridService.IsValidCellLocation(row, column)){
            this.Model.AdjancentCellLocations.push(location)
        }
    }
}

  ClickCell(){
    this.cellService.ClickCell(this.Model);
  }

  RightClickCell(){
    this.cellService.RightClickCell(this.Model);
  }

  MouseUp(){
    this.cellService.MouseUp(this.Model);
  }

  MouseDown(){
    this.cellService.MouseDown(this.Model);
  }

  Reset():void {
    this.cellService.Reset(this.Model);
    this.Model.IsPaused = false;
  };
  Start():void {
    this.Model.IsPaused = false;
  };
  Stop():void {};
  Pause():void {
    this.Model.IsPaused = true;
  };
  Win():void {
    this.cellService.Win(this.Model);
  };
  Lose():void {
    this.cellService.RevealMineStatus(this.Model);
  };
  Warning():void {
    this.Model.IsPaused = false;
  }

}
