import { Component, OnInit, Input } from '@angular/core';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStateManager } from '../Services/game-state.service';
import { GridService } from '../Services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(public gameStateManager : GameStateManager, private gridService : GridService) {}

  ngOnInit() {}
}
