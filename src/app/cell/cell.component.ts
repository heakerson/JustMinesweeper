import { Component, OnInit, Input } from '@angular/core';
import { CellModel } from './CellModel';
import { GameStatus } from '../board/GameStatus';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStateService } from '../Services/game-state.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit, IUpdateable {

  @Input() Model : CellModel;

  constructor(public gameStateService : GameStateService) { }

  ngOnInit() {
    this.gameStateService.RegisterUpdateable(this);
  }

  ClickCell(){
    this.Model.ClickCell();
  }

  RightClickCell(){
    this.Model.RightClickCell();
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

}
