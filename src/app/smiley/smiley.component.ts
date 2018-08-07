import { Component, OnInit, Input } from '@angular/core';
import { SmileyModel } from './SmillyModel';
import { IUpdateable } from '../Interfaces/IUpdateable';
import { GameStateService } from '../Services/game-state.service';
import { GameStatus } from '../board/GameStatus';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit, IUpdateable {

  @Input() Model : SmileyModel;

  constructor(public gameStateService : GameStateService) { }

  ngOnInit() {
    this.gameStateService.RegisterUpdateable(this);
  }

  Reset():void {};
  Start():void {};
  Stop():void {};
  Pause():void {};
  Win():void {};
  Lose():void {};  

}
