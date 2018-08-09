import { Component, OnInit, Input } from '@angular/core';
import { GridModel } from './GridModel';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStateManager } from '../Services/game-state.service';
import { GameStatus } from '../board/GameStatus';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, IUpdateable {

  @Input() Model : GridModel;

  constructor(public gameStateManager : GameStateManager) {}

  ngOnInit() {
    this.gameStateManager.RegisterUpdateable(this);
  }

  Reset():void {
    this.Model.Flags = 0;
  };
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {
    this.Model.RevealMines();
  };
}
