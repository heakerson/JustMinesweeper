import { Component, OnInit } from '@angular/core';
import { IUpdateable } from '../../Interfaces/IUpdateable';
import { GameStateManager } from '../../Services/Game State Service/game-state.service';
import { GridService } from '../../Services/Grid Service/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, IUpdateable{

  constructor(public gameStateManager : GameStateManager, private gridService : GridService) {}

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    this.gridService.FlaggedCells = [];
    this.gridService.MinesLocated = 0;
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  
  Warning():void {}
}
